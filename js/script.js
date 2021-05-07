$(function () {

  /* Menu nav toggle */
  $(".menu-burger__header").click((function () {
    $(".menu").toggleClass("open-menu")
  }))


  $('.projects__slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: !0,
    centerMode: false,
    variableWidth: false,
    //     infinite: true,

    responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          // variableWidth: true,
          centerMode: true,
          //infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          // variableWidth: true,
          centerMode: true,
          //infinite: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          centerMode: false,

        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          // centerMode: false,

        }
      },
    ]
  });

  $('.partners__slider-items').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1305,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
          infinite: true,

        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
          infinite: true,

        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 570,
        settings: {
          autoplay: true,
          speed: 500,
          slidesToShow: 2,
          centerMode: false,
        }
      },
      // {
      //   breakpoint: 569,
      //   settings: {
      //     autoplay: true,
      //     slidesToShow: 1,
      //     // infinite: true,
      //     variableWidth: true,
      //     centerMode: false,
      //   }
      // },
      // {
      //   breakpoint: 499,
      //   settings: {
      //     autoplay: true,
      //     slidesToShow: 2,
      //     centerMode: false,
      //   }
      // },
      {
        breakpoint: 455,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]

  });
});

let mainSlider = new Swiper('.main-slider', {
  loop: true,
  spaceBetween: 40,
  allowTouchMove: false,
  navigation: {
    nextEl: '.main-slider__next',
    prevEl: '.main-slider__prev',
  },
});