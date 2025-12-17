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