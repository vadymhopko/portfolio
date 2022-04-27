$(document).ready(function () {
  $(".header-mobile-burger").click(function (event) {
    $(".header-mobile-burger, .header-nav").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".header-nav-link").click(function (event) {
    $(".header-mobile-burger, .header-nav").removeClass("active");
  });
});
