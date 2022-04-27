//Бургер меню на jQuery

$(document).ready(function () {
  $(".header-burger-menu").click(function (event) {
    $(".header-nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".menu-close").click(function (event) {
    $(".header-nav").removeClass("active");
    $("body").removeClass("lock");
  });
});

//Фиксированный хедер при скроле на jQuery

if ($(window).width() < 1024) {
  console.log("Please");
} else {
  $(function () {
    let header = $(".header-bottombar");
    let hederHeight = header.height();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 124) {
        header.addClass("header-fixed");
        $("body").css({
          paddingTop: hederHeight + 31,
        });
      } else {
        header.removeClass("header-fixed");
        $("body").css({
          paddingTop: 0,
        });
      }
    });
  });
}

//Модальное окно на JavaScript

const btnPrimary = document.querySelectorAll(".btn-primary");
const mdClose = document.querySelector("#mdClose");
const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modalOverlay");

btnPrimary.forEach((btnPrimary) => {
  btnPrimary.addEventListener("click", () => {
    modal.classList.add("md-active");
    modalOverlay.classList.add("md-active");
  });
});

mdClose.addEventListener("click", () => {
  modal.classList.remove("md-active");
  modalOverlay.classList.remove("md-active");
});
