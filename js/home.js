$(window).on("load", function () {
  setTimeout(function () {
    $(".key").addClass("pre");
  }, 500);

  setTimeout(function () {
    $(".key").addClass("show");
  }, 1000);

  setTimeout(function () {
    $(".home").addClass("show");
    $(".key .copy").addClass("show");
  }, 1500);
});

$(window).scroll(function () {
  $(".portal ul li").each(function () {
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200) {
      $(this).addClass("show");

      $(this)
        .delay(300)
        .queue(function () {
          $(this).find(".st").addClass("show").dequeue();
        });
    }
  });

  $(".portal").each(function () {
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200) {
      $(this).addClass("show");
      $(this).find(".box_kakko").addClass("show");
      $(this).find(".inner").addClass("show");
    }
  });
});
