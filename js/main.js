// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================
const revealElements = document.querySelectorAll('.reveal');
const revealItems = document.querySelectorAll('.reveal-item');
const revealLists = document.querySelectorAll('.reveal-list li');

const observerOptions = {
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((el) => revealObserver.observe(el));
revealItems.forEach((el) => revealObserver.observe(el));

// Stagger list items
const listObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('li');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 120);
      });
      listObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-list').forEach((list) => {
  listObserver.observe(list);
});
