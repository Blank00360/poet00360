// Fade-in animation on scroll
const elements = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

elements.forEach((el) => observer.observe(el));
