const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const navBox = document.querySelector(".header-nav-box");
const body = document.querySelector("body");
const logoLink = document.querySelector(".logo-link");
const galleryPic = document.querySelectorAll(".section-gallery-img");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  navBox.classList.toggle("show");
  body.classList.toggle("lock");
  logoLink.classList.toggle("hide");
});

for (let i = 0; i < galleryPic.length; i++) {
  galleryPic[i].addEventListener("click", function () {
    galleryPic[i].classList.toggle("active-foto");
    overlay.classList.toggle("show-overlay");
  });
}
