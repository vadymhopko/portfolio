if ($(window).width() < 768) {
  $(".comments-content, .section-diplomas-content").slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
} else {
  console.log("hi");
}

////// Кнопка отзывы - "читать полностью" //////

const clamp = document.querySelectorAll(".comments-content-link");
const clampText = document.querySelectorAll(".comments-content-text");

// Для всех отзывов активация
for (let i = 0; i < clamp.length; i++) {
  clamp[i].addEventListener("click", () => {
    for (let i = 0; i < clampText.length; i++) {
      clampText[i].classList.toggle("active-clamp");
      clamp[i].classList.toggle("hide");
      if (clamp[i].matches(".hide")) {
        clamp[i].innerHTML = "Свернуть";
      } else {
        clamp[i].innerHTML = "Читать полностью";
      }
    }
  });
}

// //Для одиночных
// for (let i = 0; i < clamp.length; i++) {
//   clamp[i].addEventListener("click", function () {
//     clampText[i].classList.toggle("active-clamp");
//     clamp[i].classList.toggle("hide");
//     if (clamp[i].matches(".hide")) {
//       clamp[i].innerHTML = "Свернуть";
//     } else {
//       clamp[i].innerHTML = "Читать полностью";
//     }
//   });
// }
