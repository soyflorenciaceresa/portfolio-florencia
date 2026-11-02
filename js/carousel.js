document.addEventListener('DOMContentLoaded', () => {
  const INTERVAL = 2000;
  const SLIDE_MS = 600;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    if (slides.length < 2 || reduceMotion) return;

    // clone of the first slide at the end so the loop never slides backwards
    track.appendChild(slides[0].cloneNode(true)).setAttribute('aria-hidden', 'true');

    let index = 0;
    const goTo = (i, animate) => {
      track.style.transition = animate ? `transform ${SLIDE_MS}ms ease` : 'none';
      track.style.transform = `translateX(-${i * 100}%)`;
    };

    setInterval(() => {
      if (document.hidden) return;
      index += 1;
      goTo(index, true);
      if (index === slides.length) {
        setTimeout(() => {
          index = 0;
          goTo(0, false);
        }, SLIDE_MS);
      }
    }, INTERVAL);
  });
});
