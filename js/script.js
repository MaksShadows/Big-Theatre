$(function(){

    $('.projects__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
		slidesToShow: 4,
        slidesToScroll: 1,
    //      centerMode: true,
    //    variableWidth: true,
    //     infinite: true,

     responsive: [
            {
              breakpoint: 991,
              settings: {
              slidesToShow: 2,
              }
            }
          ]
    });

      $('.main-slider').slick({
        arrows: false,
       dots: false,
         slidesToShow: 1,

    });
});