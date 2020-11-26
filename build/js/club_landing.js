//переключение табов стандарт/vip
$(document).on('click', '.js-tab-changer', function () {
  var el = $(this);
  $('.js-tab-changer').removeClass('is-active');
  el.addClass('is-active');

  $('.configs-tab.is-active').animate({
    opacity: 0
  }, 400, function() {
    $('.configs-tab.is-active').removeClass('is-active');
    $('.configs-tab[data-target='+el.attr('data-target')+']').addClass('is-active').animate({
      opacity: 1
    }, 400);
  });

  return false;
});

$(document).ready(function() {
  //слайдер отзывов
  if($('.js-reviews-slider').length) {
    $('.js-reviews-slider').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});
