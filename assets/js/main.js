$(function () {
  "use strict";

  //===== Preloader
  $(window).on('load', function () {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Smooth Section Link Activation (optional, requires .page-scroll class)
  var scrollLink = $('.page-scroll');
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  //===== Collapse Navbar on Click
  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").removeClass('active');
  });

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });

  //===== Slick Slider - Portfolio Items
  $('.slider-items-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  //===== Isotope Portfolio Filtering
  $('.container').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      transitionDuration: '1s'
    });

    $('.portfolio-menu ul').on('click', 'li', function (event) {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });

      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  //===== Testimonial Slider
  $('.testimonial-active').slick({
    dots: false,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1
  });

  //===== Magnific Popup (Video)
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });

  //===== Magnific Popup (Images)
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  //===== Back to Top Button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });
});
