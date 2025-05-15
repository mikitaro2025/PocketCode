$(function () {
  var ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    $("head").prepend(
      '<meta name="viewport" content="width=device-width,initial-scale=1">'
    );
  } else {
    $("head").prepend('<meta name="viewport" content="width=1200">');
  }
});

$(window).on("load", function () {
  let lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  setTimeout(function () {
    $(".cate_title").addClass("show");
  }, 100);
});

//-----------------------------------------------------------------
//	Scroll anime
//-----------------------------------------------------------------

/*
$(window).on('load', function() {
$('.fade').each(function(){
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
var imgPos = $(this).offset().top;
if (scroll > imgPos - windowHeight + 200){
    $(this).addClass('show');
}
});
});
*/

/*

$(function(){

$(window).scroll(function (){

windowW = $(window).width();

if(windowW > 768){
var showP = 300;
} else {
var showP = 50;
}

$('.ph_random').each(function(){
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
var imgPos = $(this).offset().top;
if (scroll > imgPos - windowHeight + showP){
	
  var s = $('.ph_random li');
  s.each(function(i){
    var t = $(this);
    t.delay(200*i).queue(function() {
      $(this).addClass('show').dequeue();
    });
  });
  
} else if(scroll < imgPos - windowHeight) {
	 $('.ph_random li').removeClass('show');
}
});

});

});
*/

$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 100) {
      $("body").addClass("scroll");
    } else {
      $("body").removeClass("scroll");
    }

    // $('#scroll').text(scroll);
  });
});

//-----------------------------------------------------------------
//Smooth scroll
//-----------------------------------------------------------------

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//-----------------------------------------------------------------
//MatchHeight
//-----------------------------------------------------------------

$(function () {
  $(".matchHeight").matchHeight();
});

$(function () {
  $(".matchHeight02").matchHeight();
});

$(function () {
  $(".matchHeight03").matchHeight();
});

//-----------------------------------------------------------------
//Menu
//-----------------------------------------------------------------

$(function () {
  $(".toggle").on("click", function () {
    $(this).toggleClass("active");
    $("header").toggleClass("normal");
    $("body").toggleClass("noscroll");
  });
});
