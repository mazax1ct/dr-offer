var filtered = false;
var switchedOff = false;
var settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 2,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
      }
    }
  ]
}

$(document).ready(function() {
  //слайдер-баннер дизайнов с видео
  if($('.js-design-banner').length) {
    $('.js-design-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      asNavFor: '.js-design-banner-2',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
          }
        }
      ]
    });

    $('.js-design-banner').on('afterChange', function(event, slick, currentSlide, nextSlide) {
      $('#video-banner').attr('src', $('.slick-current').attr('data-src'));
    });
  }

  if($('.js-design-banner-2').length) {
    $('.js-design-banner-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      mobileFirst: true,
      focusOnSelect: true,
      asNavFor: '.js-design-banner',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });
  }


  //слайдер корпусов
  if($('.js-box-slider').length) {
    $('.js-box-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
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


//смена корпуса
$(document).on('click', '.js-box-change', function () {
  $('.js-box-change').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

//прокрутка до формы добавления дизайна
$(document).on('click', '.js-add-design', function () {
  var offsetTop = $('#add_design').offset().top - $('.header').height();
  $('html, body').animate({scrollTop:offsetTop}, '500');
  return false;
});

//блок выпадашка с шерами
$(document).on('click', '.js-share-dropdown', function () {
  $(this).toggleClass('is-active');
  $('.box-block__social-dropdown').toggleClass('is-open');
  return false;
});

//фильтрация дизайнов корпусов по разделам
$(document).on('click', '.js-filter', function () {
  $('.js-filter').removeClass('is-active');
  $(this).addClass('is-active');

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
