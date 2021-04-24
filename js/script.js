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
    centerMode: true,
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
});