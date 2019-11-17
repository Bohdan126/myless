(function ($, Drupal) {

  Drupal.behaviors.initSlider = {
    attach: function (context, settings) {
      $('.view-articles-block-slider .view-content').slick({
        dots: true,
        speed: 800,
        autoplay: true,
        arrows: false,
      });
      $('.view-basic-page-block-slider .view-content').slick({
        speed: 300,
        infinite: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
      });
    }
  };

})(jQuery, Drupal);
