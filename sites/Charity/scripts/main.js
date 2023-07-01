//====== ScrollReveal ======//

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1300,
  delay: 350,
  // reset: true,
});

sr.reveal(".section-hero-caption");
sr.reveal(".section-hero-subtitle", { delay: 400 });
sr.reveal(".section-hero-text", { delay: 500 });
sr.reveal(".section-hero-actions", { delay: 600 });
sr.reveal(".section-hero-arc", { delay: 550, origin: "bottom" });

//====== Активация бургер меню ======//

const hamburger = document.querySelector(".hamburger");
const hamburgerBox = document.querySelector(".hamburger-box");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("#body");

hamburger.addEventListener("click", () => {
  hamburgerBox.classList.toggle("active");
  nav.classList.toggle("show-nav");
  body.classList.toggle("lock");
});

//====== Закрытие мобильной навигации при клике фона ======//

nav.addEventListener("click", () => {
  hamburgerBox.classList.remove("active");
  nav.classList.remove("show-nav");
  body.classList.remove("lock");
});

//====== Закрытие бургер меню при клике ссылок ======//

const navLink = document.querySelectorAll(".header-nav-link");

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    hamburgerBox.classList.remove("active");
    nav.classList.remove("show-nav");
    body.classList.remove("lock");
  });
}

//====== Активация модального окна ======//

const btnDonate = document.querySelector("#btnDonate");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#modalOverlay");
const modalClose = document.querySelector("#mdClose");

btnDonate.addEventListener("click", () => {
  modal.classList.toggle("md-active");
  overlay.classList.toggle("md-active");
});

modalClose.addEventListener("click", () => {
  modal.classList.toggle("md-active");
  overlay.classList.toggle("md-active");
});

//====== Cкролл верх ======//

function scrollUp() {
  const scrollUp = document.getElementById("scroll_up");
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else if (this.scrollY < 350) {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

//====== Swiper ======//

const swiper = new Swiper(".swiper", {
  spaceBetween: 0,
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  speed: 300,
  loop: true,
  autoHeight: true,
  preloadImages: false,

  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 5,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // mousewheel: {
  //   sensitivity: 1,
  // },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
