/* HERO LOAD */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

/* SCROLL REVEAL */
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -80px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    const staggerItems = entry.target.querySelectorAll('[data-stagger]');
    staggerItems.forEach((el, i) => {
      el.style.transitionDelay = `${i * 120}ms`;
      el.classList.add('visible');
    });

    revealObserver.unobserve(entry.target);
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* HEADER SCROLL */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});
