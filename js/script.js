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

    //       variableWidth: true,
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
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          centerMode: false,

        }
      },
    ]
  });

  $('.main-slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,

  });
  $('.partners__slider-items').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
          // infinite: true,

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
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          // variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          // variableWidth: true,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
          centerMode: false,

        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },

    ]

  });
});