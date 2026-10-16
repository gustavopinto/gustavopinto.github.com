const slides = document.querySelectorAll('.slide');
let current = 0;
const total = slides.length;

// All elements with class "reveal" are hidden initially and shown on keypress
const revealItems = [];
slides.forEach((slide, slideIdx) => {
  slide.querySelectorAll('.reveal').forEach(el => {
    revealItems.push({ el, slideIndex: slideIdx, shown: false });
  });
});

function updateSlide() {
  revealItems.forEach(r => {
    if (r.slideIndex !== current) {
      r.el.style.opacity = '0';
      r.shown = false;
    }
  });

  slides.forEach(s => s.classList.remove('active'));
  slides[current].classList.add('active');

  const pct = ((current + 1) / total) * 100;
  document.getElementById('progress').style.width = pct + '%';
  document.getElementById('counter').textContent = (current + 1) + ' / ' + total;

  const counter = document.getElementById('counter');
  counter.style.color = slides[current].classList.contains('content')
    ? 'rgba(38,9,18,0.3)'
    : 'rgba(255,255,255,0.35)';
}

function getNextReveal() {
  return revealItems.find(r => r.slideIndex === current && !r.shown);
}
function getLastShownReveal() {
  const onSlide = revealItems.filter(r => r.slideIndex === current && r.shown);
  return onSlide[onSlide.length - 1];
}

document.addEventListener('keydown', e => {
  if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) {
    e.preventDefault();
    const r = getNextReveal();
    if (r) { r.el.style.opacity = '1'; r.shown = true; return; }
    if (current < total - 1) { current++; updateSlide(); }
  } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
    e.preventDefault();
    const r = getLastShownReveal();
    if (r) { r.el.style.opacity = '0'; r.shown = false; return; }
    if (current > 0) { current--; updateSlide(); }
  } else if (e.key === 'Home') {
    e.preventDefault(); current = 0; updateSlide();
  } else if (e.key === 'End') {
    e.preventDefault(); current = total - 1; updateSlide();
  } else if (e.key === 'f' || e.key === 'F') {
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen();
  }
});

let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && current < total - 1) { current++; updateSlide(); }
    else if (diff < 0 && current > 0) { current--; updateSlide(); }
  }
});
