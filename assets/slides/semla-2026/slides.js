  const slides = document.querySelectorAll('.slide');
  let current = 0;
  const total = slides.length;

  function updateSlide() {
    revealItems.forEach(r => {
      if (r.slideIndex !== current) {
        if (r.el.classList.contains('reveal-group')) {
          r.el.querySelectorAll('.reveal-part').forEach(p => p.style.opacity = '0');
        } else {
          r.el.style.opacity = '0';
        }
        r.shown = false;
        const tw = r.el.querySelector && r.el.querySelector('.typewriter');
        if (tw) resetTypewriter(tw);
      }
    });
    slides.forEach((s) => {
      s.classList.remove('active');
    });
    slides[current].classList.add('active');

    // Reset auto-typewriters on non-active slides; trigger on active
    slides.forEach((s, i) => {
      if (i !== current) resetAutoTypewritersOnSlide(s);
    });
    setTimeout(() => autoTypewritersOnSlide(slides[current]), 400);

    const pct = ((current + 1) / total) * 100;
    document.getElementById('progress').style.width = pct + '%';
    document.getElementById('counter').textContent = (current + 1) + ' / ' + total;

    // Adjust counter color based on slide type
    const counter = document.getElementById('counter');
    if (slides[current].classList.contains('content')) {
      counter.style.color = 'rgba(38,9,18,0.3)';
    } else {
      counter.style.color = 'rgba(255,255,255,0.35)';
    }
  }

  // Sub-step reveal elements: { element, slideIndex, shown }
  const revealItems = ['tool-read', 'tool-edit', 'tool-shell', 'tool-schema', 'gap-box', 'react-bar', 'cyclical-mismatch', 'manual-box', 'transition-box', 'tool-spec-box', 'pyramid-1', 'pyramid-2', 'pyramid-3', 'pyramid-4', 'policy-col', 'auto-mode-group', 'trust-box', 'tradeoff-1', 'tradeoff-2', 'tradeoff-3', 'q-1', 'q-2', 'q-3', 'q-4', 'q-5', 'q-6', 'thanks-g'].map(id => {
    const el = document.getElementById(id);
    const slide = el ? el.closest('.slide') : null;
    return { el, slideIndex: slide ? Array.from(slides).indexOf(slide) : -1, shown: false };
  }).filter(r => r.el);

  // Typewriter effect
  let typewriterTimer = null;
  function startTypewriter(el, onComplete) {
    const text = el.dataset.text || '';
    el.textContent = '';
    const caret = el.parentNode.querySelector('.typewriter-caret');
    if (caret) caret.classList.add('active');
    let i = 0;
    const timer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(timer);
        el.dataset.typed = '1';
        if (caret) setTimeout(() => caret.classList.remove('active'), 1200);
        if (onComplete) setTimeout(onComplete, 350);
        return;
      }
      el.textContent += text[i++];
    }, 65);
    el._typewriterTimer = timer;
  }
  function resetTypewriter(el) {
    if (el._typewriterTimer) { clearInterval(el._typewriterTimer); el._typewriterTimer = null; }
    el.textContent = '';
    delete el.dataset.typed;
    const caret = el.parentNode.querySelector('.typewriter-caret');
    if (caret) caret.classList.remove('active');
  }
  function autoTypewritersOnSlide(slide) {
    const tws = slide.querySelectorAll('.typewriter[data-auto-type]');
    if (!tws.length) return;
    // Reset first
    tws.forEach(tw => {
      resetTypewriter(tw);
      const sep = tw.parentNode.querySelector('.journey-sep');
      if (sep) sep.style.opacity = '0';
    });
    // Play sequentially
    let idx = 0;
    function playNext() {
      if (idx >= tws.length) return;
      const tw = tws[idx++];
      const sep = tw.parentNode.querySelector('.journey-sep');
      if (sep) sep.style.opacity = '1';
      startTypewriter(tw, playNext);
    }
    playNext();
  }
  function resetAutoTypewritersOnSlide(slide) {
    const tws = slide.querySelectorAll('.typewriter[data-auto-type]');
    tws.forEach(tw => {
      resetTypewriter(tw);
      const sep = tw.parentNode.querySelector('.journey-sep');
      if (sep) sep.style.opacity = '0';
    });
  }

  function getNextReveal() { return revealItems.find(r => r.slideIndex === current && !r.shown); }
  function getLastShownReveal() {
    const onSlide = revealItems.filter(r => r.slideIndex === current && r.shown);
    return onSlide[onSlide.length - 1];
  }
  // Legacy alias
  const thanksEl = document.getElementById('thanks-g');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      const r = getNextReveal();
      if (r) {
        if (r.el.classList.contains('reveal-group')) {
          r.el.querySelectorAll('.reveal-part').forEach(p => p.style.opacity = '1');
        } else {
          r.el.style.opacity = '0.8';
        }
        r.shown = true;
        // Trigger typewriter inside this revealed element, if any
        const tw = r.el.querySelector('.typewriter');
        if (tw && !tw.dataset.typed) startTypewriter(tw);
        return;
      }
      if (current < total - 1) { current++; updateSlide(); }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const r = getLastShownReveal();
      if (r) {
        if (r.el.classList.contains('reveal-group')) {
          r.el.querySelectorAll('.reveal-part').forEach(p => p.style.opacity = '0');
        } else {
          r.el.style.opacity = '0';
        }
        r.shown = false;
        // Reset typewriter inside this hidden element
        const tw = r.el.querySelector('.typewriter');
        if (tw) resetTypewriter(tw);
        return;
      }
      if (current > 0) { current--; updateSlide(); }
    } else if (e.key === 'Home') {
      e.preventDefault();
      current = 0; updateSlide();
    } else if (e.key === 'End') {
      e.preventDefault();
      current = total - 1; updateSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  });

  // Touch support
  let touchStartX = 0;
  document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  document.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < total - 1) { current++; updateSlide(); }
      else if (diff < 0 && current > 0) { current--; updateSlide(); }
    }
  });

  updateSlide();

  // Journey map animation
  (function() {
    const canvas = document.getElementById('journey-map');
    if (!canvas) return;

    canvas.width = 800;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');
    const W = 800, H = 500;

    // Projection: Americas + Atlantic view
    const lonMin = -145, lonMax = 25;
    const latMax = 80, latMin = -60;

    function project(lon, lat) {
      return [
        (lon - lonMin) / (lonMax - lonMin) * W,
        (latMax - lat) / (latMax - latMin) * H
      ];
    }

    const cities = [
      { name: 'Belém, BR',    lat: -1.46, lon: -48.50 },
      { name: 'Bogotá, CO',   lat:  4.71, lon: -74.07 },
      { name: 'Montréal, CA', lat: 45.50, lon: -73.57 }
    ];

    const pts = cities.map(c => project(c.lon, c.lat));

    // Quadratic bezier control points for each leg
    const ctrls = [
      [(pts[0][0] + pts[1][0]) / 2 - 10, (pts[0][1] + pts[1][1]) / 2 - 55],
      [(pts[1][0] + pts[2][0]) / 2 - 45, (pts[1][1] + pts[2][1]) / 2 - 55]
    ];

    // Label text offsets [dx, dy]
    const labelOffsets = [[9, -11], [-78, -11], [9, -11]];

    let geoData = null;

    fetch('https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/DATA/world.geojson')
      .then(r => r.json())
      .then(data => { geoData = data; })
      .catch(() => {});

    function drawLand() {
      if (!geoData) return;
      ctx.fillStyle = '#3d1522';
      ctx.strokeStyle = '#5c2535';
      ctx.lineWidth = 0.5;

      const drawRings = (rings) => {
        ctx.beginPath();
        rings[0].forEach(([lon, lat], i) => {
          const [x, y] = project(lon, lat);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };

      geoData.features.forEach(f => {
        if (!f.geometry) return;
        const { type, coordinates } = f.geometry;
        if (type === 'Polygon') drawRings(coordinates);
        else if (type === 'MultiPolygon') coordinates.forEach(drawRings);
      });
    }

    function drawPaths() {
      ctx.save();
      ctx.setLineDash([5, 6]);
      ctx.strokeStyle = 'rgba(204,121,88,0.3)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(pts[i][0], pts[i][1]);
        ctx.quadraticCurveTo(ctrls[i][0], ctrls[i][1], pts[i+1][0], pts[i+1][1]);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawCities() {
      pts.forEach(([x, y], i) => {
        // Glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 16);
        grd.addColorStop(0, 'rgba(204,121,88,0.5)');
        grd.addColorStop(1, 'rgba(204,121,88,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();

        // Dot
        ctx.fillStyle = '#CC7958';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Label
        const [dx, dy] = labelOffsets[i];
        ctx.font = '600 12px Inter, sans-serif';
        const lw = ctx.measureText(cities[i].name).width;
        ctx.fillStyle = 'rgba(22,6,16,0.75)';
        ctx.fillRect(x + dx - 3, y + dy - 13, lw + 6, 17);
        ctx.fillStyle = '#DED4D4';
        ctx.fillText(cities[i].name, x + dx, y + dy);
      });
    }

    function qbPoint(p0, cp, p1, t) {
      const m = 1 - t;
      return [m*m*p0[0] + 2*m*t*cp[0] + t*t*p1[0], m*m*p0[1] + 2*m*t*cp[1] + t*t*p1[1]];
    }

    function qbAngle(p0, cp, p1, t) {
      const m = 1 - t;
      return Math.atan2(2*m*(cp[1]-p0[1]) + 2*t*(p1[1]-cp[1]), 2*m*(cp[0]-p0[0]) + 2*t*(p1[0]-cp[0]));
    }

    function ease(t) { return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2; }

    const legDuration = 3500, pauseDuration = 2000;
    const totalCycle = legDuration * 2 + pauseDuration;
    let startTime = null;

    function frame(ts) {
      const slide = canvas.closest('.slide');
      if (!slide || !slide.classList.contains('active')) {
        startTime = null;
        requestAnimationFrame(frame);
        return;
      }

      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) % totalCycle;

      ctx.fillStyle = '#160610';
      ctx.fillRect(0, 0, W, H);

      drawLand();
      drawPaths();
      drawCities();

      let leg, t;
      if (elapsed < legDuration) {
        leg = 0; t = ease(elapsed / legDuration);
      } else if (elapsed < legDuration * 2) {
        leg = 1; t = ease((elapsed - legDuration) / legDuration);
      } else {
        leg = 1; t = 1;
      }

      const et = Math.min(t, 0.999);
      const [px, py] = qbPoint(pts[leg], ctrls[leg], pts[leg+1], et);
      const angle = qbAngle(pts[leg], ctrls[leg], pts[leg+1], et);

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.font = '20px serif';
      ctx.fillText('✈', -10, 7);
      ctx.restore();

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  })();
