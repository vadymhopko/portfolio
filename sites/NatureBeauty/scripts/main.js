//====== Актитвация бургер меню ======//

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("show");
  body.classList.toggle("lock");
});

//====== Закрытие бургер меню при клике ссылок ======//

const navLink = document.querySelectorAll(".header-nav-link");

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("show");
    body.classList.remove("lock");
  });
}

// Прокрутка к секции

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop - 270,
    behavior: "smooth",
  });
}

const scrollLink = document.querySelector(".section-hero-scroll");
const sectionHoliday = document.querySelector("#holiday");

scrollLink.addEventListener("click", () => {
  scrollTo(sectionHoliday);
});
