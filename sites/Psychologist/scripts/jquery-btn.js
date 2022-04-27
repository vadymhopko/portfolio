//Кнопка-стрелка хедера для скрола к разделу "Обо мне" на jQuery

if ($(window).width() < 768) {
  console.log("hi");
} else {
  $(".btn-down, .link-down").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 56,
      },
      {
        duration: 0,
        easing: "linear",
      }
    );

    return false;
  });
}
