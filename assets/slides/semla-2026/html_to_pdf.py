#!/usr/bin/env python3
"""
Convert an HTML slide presentation to PDF using Chrome headless.
- Starts a local HTTP server so external CSS/JS files are loaded correctly.
- Injects CSS/JS overrides that make every slide and reveal item fully visible.
"""
import os
import sys
import re
import subprocess
import tempfile
import threading
import time
import http.server
import socketserver
from pathlib import Path

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Injected into <head>: page layout + reveal all hidden elements via CSS
PRINT_CSS = """
<style id="__pdf-css__">
  @page {
    size: 1280px 720px;
    margin: 0;
  }
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    transition: none !important;
    animation: none !important;
  }
  body {
    overflow: visible !important;
    height: auto !important;
    width: 1280px !important;
  }
  .slide {
    position: relative !important;
    display: flex !important;
    width: 1280px !important;
    height: 720px !important;
    page-break-after: always !important;
    break-after: page !important;
    overflow: hidden !important;
    opacity: 1 !important;
  }
  .slide:last-child {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }
  /* Reveal all CSS-hidden cards */
  .reveal-card,
  .reveal-part {
    opacity: 1 !important;
  }
  /* Show journey separators */
  .journey-sep {
    opacity: 1 !important;
  }

  /* ── Three-tier architecture: reduce to fit 720px ── */
  .arch-full { margin-top: 10px !important; }
  .arch-box-v { padding: 14px 18px !important; }
  .arch-box-v .arch-icon { font-size: 20px !important; margin-bottom: 4px !important; }
  .arch-box-v h4 { font-size: 17px !important; margin-bottom: 2px !important; }
  .arch-box-v .tech { font-size: 12px !important; }
  .arch-details { margin-top: 10px !important; }
  .arch-details li { font-size: 12px !important; padding: 3px 0 3px 14px !important; line-height: 1.35 !important; }
  .arch-react-bar { margin-top: 14px !important; padding: 10px 20px !important; font-size: 14px !important; }

  /* ── 14 decisions across three dimensions: reduce to fit 720px ── */
  .decisions-overview { gap: 16px !important; margin-top: 6px !important; }
  .decision-box { padding: 14px 16px !important; }
  .decision-box h3 { font-size: 16px !important; margin-bottom: 8px !important; }
  .decision-box ol li { font-size: 12px !important; padding: 4px 0 4px 26px !important; line-height: 1.3 !important; }
  .paper-footer { margin-top: 10px !important; font-size: 13px !important; }

  /* ── "Thanks, G." — remover posicionamento absoluto no PDF ── */
  #thanks-g {
    position: relative !important;
    bottom: auto !important;
    right: auto !important;
    align-self: flex-end !important;
    margin-top: 16px !important;
    font-size: 36px !important;
  }
</style>
"""

# Injected before </body>: fixes inline opacity:0 and fills typewriter text
REVEAL_JS = """
<script id="__pdf-js__">
(function () {
  function revealAll() {
    // Make all inline opacity:0 elements visible
    document.querySelectorAll('[style]').forEach(function (el) {
      if (el.style.opacity === '0') el.style.opacity = '1';
    });

    // Fill typewriter placeholders with their data-text content
    document.querySelectorAll('.typewriter[data-text]').forEach(function (el) {
      el.textContent = el.dataset.text;
    });

    // Show journey separators set by JS to opacity:0
    document.querySelectorAll('.journey-sep').forEach(function (el) {
      el.style.opacity = '1';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealAll);
  } else {
    revealAll();
  }
})();
</script>
"""


def find_free_port() -> int:
    import socket
    with socket.socket() as s:
        s.bind(("", 0))
        return s.getsockname()[1]


def start_server(directory: str, port: int) -> socketserver.TCPServer:
    handler = http.server.SimpleHTTPRequestHandler
    handler.log_message = lambda *args: None

    os.chdir(directory)
    server = socketserver.TCPServer(("", port), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


def make_static_html(input_path: str, out_dir: str) -> str:
    """Return path to a temp HTML with all animations stripped and all content revealed."""
    with open(input_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Remove slides.js so no navigation JS runs
    html = re.sub(r'<script\s+src=["\']slides\.js["\'][^>]*>\s*</script>', '', html)

    # Inject CSS overrides into <head>
    html = html.replace("</head>", PRINT_CSS + "\n</head>", 1)

    # Inject reveal JS before </body>
    html = html.replace("</body>", REVEAL_JS + "\n</body>", 1)

    tmp = tempfile.NamedTemporaryFile(
        mode="w", suffix=".html", dir=out_dir, delete=False, encoding="utf-8"
    )
    tmp.write(html)
    tmp.close()
    return tmp.name


def html_to_pdf(input_path: str, output_path: str | None = None) -> str:
    input_path = os.path.abspath(input_path)

    if not os.path.exists(input_path):
        print(f"Error: file not found: {input_path}")
        sys.exit(1)

    if output_path is None:
        output_path = os.path.splitext(input_path)[0] + ".pdf"
    output_path = os.path.abspath(output_path)

    slide_dir = os.path.dirname(input_path)
    port = find_free_port()

    tmp_html = make_static_html(input_path, slide_dir)
    tmp_name = os.path.basename(tmp_html)

    server = start_server(slide_dir, port)
    time.sleep(0.3)

    url = f"http://localhost:{port}/{tmp_name}"

    cmd = [
        CHROME,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=3000",
        f"--print-to-pdf={output_path}",
        "--print-to-pdf-no-header",
        url,
    ]

    print(f"Converting : {input_path}")
    print(f"Output     : {output_path}")
    print(f"Server     : http://localhost:{port}/")

    result = subprocess.run(cmd, capture_output=True, text=True)

    server.shutdown()
    os.unlink(tmp_html)

    if result.returncode != 0:
        print("Chrome error:")
        print(result.stderr)
        sys.exit(1)

    size_kb = os.path.getsize(output_path) // 1024
    print(f"Done — {size_kb} KB")
    return output_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        script = os.path.basename(__file__)
        print(f"Usage: python3 {script} <input.html> [output.pdf]")
        sys.exit(1)

    html_to_pdf(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
