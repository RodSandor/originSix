const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  })  
};

for (const element of links) {
    element.addEventListener('click', () => {
      nav.classList.remove('show');
    })  
};

const header = document.querySelector('#header');
const navHeight = header.offsetHeight

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// Slider Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewhell: true,
  keyboard: true,

})

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contacts .tedxt, #contact .links
`, {interval: 100})