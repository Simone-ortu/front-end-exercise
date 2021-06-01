const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s";
      }
    });
  });
};
navSlide();

// Nav change colors on scroll
window.addEventListener('scroll', function () {
  const navChange = document.querySelector('nav');
  navChange.classList.toggle('nav-scrolled', window.scrollY > 0);
});

window.addEventListener('scroll', function () {
  const logoChange = document.querySelector('img');
  logoChange.src = window.scrollY > 0 ? 'images/logo-playground-black.png' : 'images/logo-playground-white.png'
});


// Carousel
const myslide = document.querySelectorAll('.slideshow-item');
let counter = 0;


function plusSlide(n) {
  counter += n;
  slidefun(counter);
}

function currentSlide(n) {
  counter = n;
  slidefun(counter);
}

function minusSlide(n) {
  counter -= n;
  slidefun(counter);
}

function slidefun(n) {
  for (let i = 0; i < myslide.length; i++) {
    myslide[i].style.display = 'none';
  }
  if (n>myslide.length) {
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter - 1 ].style.display='block';
    
}