$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Adjust the speed (in milliseconds) as needed
      dots: false,
      arrows: false,
    });
  
    // Manually control with buttons
    $('.prev-button').on('click', function() {
      $('.carousel').slick('slickPrev');
    });
  
    $('.next-button').on('click', function() {
      $('.carousel').slick('slickNext');
    });
  });
  