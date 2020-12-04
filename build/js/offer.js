$(document).on('click', '.conf__list-item', function() {
  $('.conf__list-item').removeClass('slick-current');
  $(this).addClass('slick-current');
  return false;
});

$('.conf-item__config-block').hover(
  function () {
    $(this).find('.js-conf-open').addClass('is-active');
    $(this).find('.conf-item__config-inner').slideToggle();
  }, function () {
    $(this).find('.js-conf-open').removeClass('is-active');
    $(this).find('.conf-item__config-inner').slideToggle();
  }
);

$(document).on('tap', '.js-conf-open', function() {
  $(this).toggleClass('is-active');
  $(this).prev('.conf-item__config-inner').slideToggle();
  return false;
});

$(document).ready(function () {
  //список конфигураций
  if($('.js-configs-list').length && $('body').width() < 1024) {
    $('.js-configs-list').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="conf__list-button conf__list-button--prev" aria-label="Назад" type="button"><svg class="conf__list-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
      nextArrow: '<button class="conf__list-button conf__list-button--next" aria-label="Вперед" type="button"><svg class="conf__list-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
});
