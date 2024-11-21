window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.querySelector('.loader');
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    }, 100);
  });

// Scroll animation using IntersectionObserver
const scrollElements = document.querySelectorAll('.scroll-fade');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

scrollElements.forEach(element => {
  observer.observe(element);
});
