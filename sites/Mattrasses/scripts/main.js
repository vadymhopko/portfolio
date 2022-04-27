const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("show");
  body.classList.toggle("lock");
});
