$(function(){


   /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    $('.projects__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
		slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
//       variableWidth: true,
    //     infinite: true,

     responsive: [
            {
              breakpoint: 1000,
              settings: {
              slidesToShow: 2,
                // variableWidth: true,
                 centerMode: true,
                 //infinite: true,
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