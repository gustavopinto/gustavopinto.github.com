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
