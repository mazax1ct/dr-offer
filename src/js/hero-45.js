//скролл текущей кнопки в область видимости контейнера
function designsControlsScroll(elem) {
  var containerOuterWidth = elem.parent().outerWidth(); // узнаем ширину контейнера (width + padding)
  var itemOuterWidth = elem.outerWidth(); // узнаем ширину текущего элемента (width + padding)
  var itemOffsetLeft = elem.offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
  var containerScrollLeft = elem.parent().scrollLeft(); // узнаем текущее значение скролла
  var positionCetner = (containerOuterWidth / 2 - itemOuterWidth / 2); // рассчитываем позицию центра
  var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера
  // анимируем
  elem.parent().animate({
    scrollLeft: scrollLeftUpd
  }, 400);
}

var filtered = false;
var switchedOff = false;
var settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>'
      }
    }
  ]
}

$(document).ready(function() {
  if($('.js-box-main-slider').length) {
    $('.js-box-main-slider').slick({
      asNavFor: '.js-box-slider',
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: true,
            prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>'
          }
        }
      ]
    });
  }

  //слайдер корпусов
  if($('.js-box-slider').length) {
    $('.js-box-slider').slick({
      asNavFor: '.js-box-main-slider',
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      focusOnSelect: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            vertical: true
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            vertical: true
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            vertical: true
          }
        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 5,
            vertical: true
          }
        },
      ]
    });
  }

  //список дизайнов
  if($('.js-designs-slider').length) {
    $('.js-designs-slider').slick(settings);
  }
});

//фильтрация дизайнов корпусов по разделам
$(document).on('click', '.js-filter', function () {
  $('.js-filter').removeClass('is-active');
  $(this).addClass('is-active');
  designsControlsScroll($(this));

  var filter = $(this).data('filter');
  if(switchedOff == true) {
    $('.js-designs-slider').slick(settings);
    switchedOff = false;
  }

  if(filter == 'all') {
    $('.js-designs-slider').slick('slickUnfilter');
    filtered = false;
  } else {
    $('.js-designs-slider').slick('slickUnfilter').slick('slickFilter','[data-filter="'+filter+'"]');
    filtered = true;
  }

  $('.js-show-all-designs').removeClass('hidden');
});

//смена дизайна для корпуса
$(document).on('click', '.js-design-change', function () {
  $('.js-design-change').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

//показать все дизайны корпусов
$(document).on('click', '.js-show-all-designs', function () {
  if(filtered == true) {
    $('.js-designs-slider').slick('slickUnfilter');
    filtered = false;
  }
  setTimeout(function() {
    $('.js-designs-slider').slick('unslick');
    switchedOff = true;
  },300);
  $(this).addClass('hidden');
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});
