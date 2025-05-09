// script.js
// Add more interactive features here if needed.
document.addEventListener("DOMContentLoaded", () => {
    console.log("SuPrathon Website Loaded Successfully");
});


document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
  
        // Collapse others
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const animateElems = document.querySelectorAll('[data-animate]');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    animateElems.forEach(el => observer.observe(el));
  });







  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  });