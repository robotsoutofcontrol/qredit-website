(function ($) {
  "use strict";

  // loading
  $(window).on("load", function () {
    $("#loading").fadeOut(600);
    $('html').css('overflow-y', 'visible');
  });

  // sticky menu
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
      $(".cf-header-wrapper").addClass("cf-sticky");
    } else {
      $(".cf-header-wrapper").removeClass("cf-sticky");
    }
  });

  // menu show hide by scroll
  // var prev = 0;
  // var $window = $(window);
  // var nav = $('.cf-header-wrapper');

  // $window.on('scroll', function(){
  //   var scrollTop = $window.scrollTop();
  //   nav.toggleClass('cf-hidden', scrollTop > prev);
  //   prev = scrollTop;
  // });


  // smooth scroll
  $(".cf-off-canvas-menu li a, .cf-main-menu li a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });

  // offcanvas menu and overly
  $(".cf-menu-bars").on('click', function () {
    $(".cf-off-canvas-menu, .cf-overly, body").addClass('active');
    return false;
  });

  $(".cf-menu-close, .cf-overly").on('click', function () {
    $(".cf-off-canvas-menu, .cf-overly, body").removeClass('active');
  });

  // proggress bar
  $('#cf-pro-bar').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: '#fff',
    backgroundColor: '#686868',
    radius: '0px',
    height: '2px',
    width: '100%'
  });
  $('#cf-pro-bar-2').LineProgressbar({
    percentage: 90,
    fillBackgroundColor: '#fff',
    backgroundColor: '#686868',
    radius: '0px',
    height: '2px',
    width: '100%'
  });

  // data background
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });

  // popup video
  $('.cf-play').magnificPopup({
    type: 'video'
  });


  // hero slider
  $(".cf-hero-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    smartSpeed: 1500,
    autoplayTimeout: 6000,
    slideTransition: 'linear',
    animateOut: 'fadeOutDown',
    animateIn: 'fadeInDown',
  });

  // portfolio slider
  $(".cf-portfo-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    margin: 30,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1300: {
        items: 3,
      }
    }
  });

  // counter up
  $(".cf-factor-item span").counterUp({
    delay: 10,
    time: 1000
  });

  // testimonial slider
  $(".cf-testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    margin: 30,
    center: false,
    smartSpeed: 1500,
  });

  // blog slider
  $(".cf-blog-slider").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    margin: 30,
    center: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1300: {
        items: 3,
      }
    }
  });

  // faqs heighlight
  $(".cf-card h4 a").on('click', function () {
    $(".cf-card h4 a").removeClass('active');
    $(this).addClass('active');
  });

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.cf-scroll-to-top').addClass('active');
    } else {
      $('.cf-scroll-to-top').removeClass('active');
    }
  });
  $('.cf-scroll-to-top').on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 2000);
    return false;
  });

  /*Smoot scroll*/
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 0
    }, 20);
  });

  //custom file upload
  $('#cf-file-reset').on('click', function (e) {
    var $el = $('#cf-file');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();
  });
  $('#cf-file-reset-2').on('click', function (e) {
    var $el = $('#cf-file-2');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();
  });


}(jQuery));