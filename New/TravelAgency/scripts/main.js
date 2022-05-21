//HAMBURGER

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("show");
  body.classList.toggle("lock");
});

const navLink = document.querySelectorAll(".header-nav-link");

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("show");
    body.classList.remove("lock");
  });
}

//FORM-TABS

const formTab = document.querySelectorAll(".form-tab");

for (let i = 0; i < formTab.length; i++) {
  formTab[i].addEventListener("click", () => {
    if (formTab[i].matches(".active-tab")) {
      console.log("");
    } else if (formTab[i] === formTab[0]) {
      formTab[i].classList.add("active-tab");
      formTab[1].classList.remove("active-tab");
      formTab[2].classList.remove("active-tab");
      formTab[3].classList.remove("active-tab");
    } else if (formTab[i] === formTab[1]) {
      formTab[i].classList.add("active-tab");
      formTab[0].classList.remove("active-tab");
      formTab[2].classList.remove("active-tab");
      formTab[3].classList.remove("active-tab");
    } else if (formTab[i] === formTab[2]) {
      formTab[i].classList.add("active-tab");
      formTab[0].classList.remove("active-tab");
      formTab[1].classList.remove("active-tab");
      formTab[3].classList.remove("active-tab");
    } else if (formTab[i] === formTab[3]) {
      formTab[i].classList.add("active-tab");
      formTab[0].classList.remove("active-tab");
      formTab[1].classList.remove("active-tab");
      formTab[2].classList.remove("active-tab");
    }
  });
}
