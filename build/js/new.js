//переключение слайдера сравнения конфигураций
$(document).on('click', '.js-compare-slide', function () {
  $('.js-compare-slide').removeClass('is-active');
  $(this).addClass('is-active');
  $('.js-list-12').slick('slickGoTo', $(this).attr('data-href'));
  return false;
});

$(document).ready(function() {
  if($('body').width() < 1200) {
    //слайдер сравнения конфигураций
    if($('.js-list-12').length) {
      $('.js-list-12').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      });
    }
  }
});
