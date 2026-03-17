
/* 
const nav = document.querySelector('.nav-background');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const headerBottom = header.offsetHeight;
    if (window.scrollY >= headerBottom - nav.offsetHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

*/

const slides = document.querySelectorAll('.hero-slide');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    slides.forEach(slide => {
      if (slide.id === target) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  });
});