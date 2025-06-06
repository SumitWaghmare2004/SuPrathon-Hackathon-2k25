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

  // Domain Section JS

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



// Animated Hamburger Mobile View ( Hamburger Code )

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close navbar and reset hamburger on link click
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
  });
});
