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
  
