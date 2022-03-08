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

function changeHeaderOnScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

// Back to top btn
function backToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', ()=> {
  changeHeaderOnScroll();
  backToTop();
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
  #contacts .tedxt, #contact .links,
  #footer .brand, #footer .social
`, {interval: 100})


