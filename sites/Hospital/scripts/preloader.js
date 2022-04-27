var waiting = new Promise(function (resolve) {
  setTimeout(resolve, 1500);
});
$(window).on('load', function () {
  waiting.then(function () {
    var $preloader = $('.preloader'),
    $spinner = $preloader.find('.prePreloader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $('body').css('overflow-y','auto');
  });
});

