/* PAGE LOAD */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* HEADER SCROLL */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

/* HERO MICRO PARALLAX */
const heroImg = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
  if (!heroImg) return;
  if (window.scrollY < 400) {
    heroImg.style.transform = `translateY(${window.scrollY * 0.025}px)`;
  }
});
