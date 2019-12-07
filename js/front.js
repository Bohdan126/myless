(function ($) {
  Drupal.behaviors.drupalBookOwlCarousel = {
    attach: function (context, settings) {
      $('.view-articles-block-slider .view-content').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsiveClass:true,
      });

      $('.view-basic-page-block-slider .view-content').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
          0:{
            items:2,
            nav:true
          },
          600:{
            items:4,
            nav:true
          },
          1000:{
            items:5,
            nav:true,
            loop:false
          }
        }
      });
      $('.view-articles-block-slider, .view-basic-page-block-slider').find('.view-content').addClass('owl-carousel');
    }
  };

})(jQuery);

