const revealElements = document.querySelectorAll('.reveal');
const revealItems = document.querySelectorAll('.reveal-item');

const options = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

revealElements.forEach(el => observer.observe(el));
revealItems.forEach(el => observer.observe(el));

const listObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('li').forEach((li, i) => {
        setTimeout(() => {
          li.style.opacity = 1;
          li.style.transform = 'translateY(0)';
        }, i * 120);
      });
      listObserver.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll('.reveal-list').forEach(list =>
  listObserver.observe(list)
);
