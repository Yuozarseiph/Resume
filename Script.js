window.addEventListener('load', () => {
    // اضافه کردن تاخیر برای پایان انیمیشن لودر
    setTimeout(() => {
      const loader = document.querySelector('.loader');
      // محو کردن لودر
      loader.style.opacity = 0;
      
      // بعد از پایان انیمیشن، display را none کنیم
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000); // مدت زمانی که انیمیشن محو شدن طول می‌کشد
    }, 100); // تأخیر اولیه که می‌توانید تنظیم کنید
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