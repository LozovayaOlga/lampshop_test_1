$(document).ready(function(){
  $('.slide').slick({
     dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
});


$('document').ready(function() {
    $('.nav__item  a').each(function() {
        if ('http://localhost:3000/'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
}); 
  

$(document).ready(function(){
$('.new-product__slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				

});

