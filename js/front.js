(function ($) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      $('.view-articles-block-slider .view-content').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
          0: {
            items: 1
          },
          600:{
            items: 2
          },
          1000:{
            items: 3
          }
        }
      });
      $('.view-articles-block-slider .view-content').addClass('owl-carousel');

      $('.view-basic-page-block-slider .view-content').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
        }
      })
    }
  };
  $('.view-basic-page-block-slider .view-content').addClass('owl-carousel');

})(jQuery);

