
window.addEventListener("scroll",function(){
    const navbar = document.querySelector(".navbar-links")
  const hero = document.getElementById("hero");
    const heroHeight = hero.offsetHeight;
    if(window.scrollY > heroHeight/ 2 ){
        navbar.classList.add("scrolled")
    }
    else{
        navbar.classList.remove("scrolled")
    }
})

const menu = document.getElementById("menu")
const menuSection = document.getElementById("menu_section")
const closeBtn = document.getElementById("close_menu")
menu.addEventListener("click",function(e){
e.preventDefault()
menuSection.style.display="block"
})
closeBtn.addEventListener("click" , function(){
menuSection.style.display = "none"
})



  document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.querySelector(".order-list");
    const leftBtn = document.querySelector(".arrow-left");
    const rightBtn = document.querySelector(".arrow-right");

    function getCardWidth() {
      const card = document.querySelector(".list-box");
      return card ? card.offsetWidth + 15 : 400; // +gap
    }

    leftBtn.addEventListener("click", () => {
      orderList.scrollBy({ left: -getCardWidth(), behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      orderList.scrollBy({ left: getCardWidth(), behavior: "smooth" });
    });
  });



const slider = document.querySelector(".bank-images");
const leftBtn = document.querySelector(".arrows-left");
const rightBtn = document.querySelector(".arrows-right");

function getCardWidth() {
  const card = document.querySelector(".img");
  return card ? card.offsetWidth + 20 : 300; // 20 = gap
}

const scrollAmount = getCardWidth();

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

setInterval(() => {
  if (
    slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5
  ) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}, 3000);


let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const sliders = document.querySelector('.slider');

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    sliders.style.transform = `translateX(${-slideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Initial display
showSlides(slideIndex);

// Optional: Auto-slide
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000); // Change slide every 5 seconds