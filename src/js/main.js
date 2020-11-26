//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    h.addClass("half-scrolled");
  } else {
    h.removeClass("half-scrolled");
  }

  if($(window).scrollTop() > (h.height() * 2)) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }

  if($('.js-catalog-menu').length) {
    var m = $('.js-catalog-menu');
    var offTop = m.offset().top;

    m.height($('.catalog-menu__inner').height());

    if($(window).scrollTop() > offTop + m.height()) {
      $('.catalog-menu__inner').addClass("half-scrolled");
    } else {
      $('.catalog-menu__inner').removeClass("half-scrolled");
    }

    if($(window).scrollTop() > offTop + m.height() + h.height()) {
      $('.catalog-menu__inner').addClass("scrolled");
    } else {
      $('.catalog-menu__inner').removeClass("scrolled");
    }
  }

  if($('.js-detail-menu').length) {
    var m = $('.js-detail-menu');
    var offTop = m.offset().top;

    m.height($('.detail-tabs-nav__inner').height());

    if($(window).scrollTop() > offTop + m.height()) {
      $('.detail-tabs-nav__inner').addClass("half-scrolled");
    } else {
      $('.detail-tabs-nav__inner').removeClass("half-scrolled");
    }

    if($(window).scrollTop() > offTop + m.height() + h.height()/2) {
      $('.detail-tabs-nav__inner').addClass("scrolled");
    } else {
      $('.detail-tabs-nav__inner').removeClass("scrolled");
    }
  }
};

//проверка на тач-устройства
function isTouchDevice(){
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

//элемент для bodyScrollLock
var targetElement = document.querySelector(".menu-block__inner");

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //дропдаун у главного меню
  if(isTouchDevice()===true) {
    $('.root-link').click(function(){
      if(!$(this).parent().hasClass('is-hover')){
        var sub = $(this).next('.main-menu__dropdown');
        if(sub.is(':visible')){
          $('.main-menu__dropdown').removeClass('open');
          return true;
        } else {
          $('.main-menu__dropdown').removeClass('open');
          sub.addClass('open');
          return false;
        }
      }
    });
  } else {
    $('.root').hover(
      function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeIn(200);
      }, function() {
        $(this).find('.main-menu__dropdown').stop(true, true).fadeOut(200);
      }
    );
  }

  //слайдер главного баннера
  if($('.js-main-banner').length) {
    $('.js-main-banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true,
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

    $('.js-main-banner').on('afterChange', function(slick, currentSlide) {
      $('.main-banner__slide-back').removeClass('animate');
      $('.main-banner__slide.slick-active .main-banner__slide-back').addClass('animate');
    });
  }

  //слайдер акций
  if($('.js-actions-slider').length) {
    $('.js-actions-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true
    });
  }

  //слайдер картинок в отзыве
  if($('.js-review2-slider').length) {
    $('.js-review2-slider').slick({
      infinite: false,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            dots: true
          }
        }
      ]
    });
  }

  if($('.js-review2-slider2').length) {
    $('.js-review2-slider2').slick({
      infinite: false,
      adaptiveHeight: false,
      slidesToShow: 2,
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
            slidesToShow: 3
          }
        }
      ]
    });
  }

  //попап отзыва
  if($('[data-fancybox="review-popup"]').length) {
    $('[data-fancybox="review-popup"]').fancybox({
      arrows: false,
      infobar: false,
      modal: true,
  		afterShow: function() {
        $('.js-review2-slider2').slick('setPosition');
  		}
  	});
  }

  /******js для страницы лендинга evolv******/
  //аккордеон
  $('.js-accordion-title').click(function() {
    $(this).toggleClass('is-active');
    $('.accordion__body[data-target=' + $(this).attr('data-link') + ']').slideToggle();
    return false;
  });

  if($('body').width() < 768) {
    //слайдер корпусов
    if($('.js-list-1').length) {
      $('.js-list-1').on('init', function(event, slick) {
        var list = $('.js-list-1').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true
      });
    }

    //слайдер конфигураций
    if($('.js-list-3').length) {
      $('.js-list-3').on('init', function(event, slick) {
        var list = $('.js-list-3').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true
      });
    }

    //слайдер дизайна
    if($('.js-list-5').length) {
      $('.js-list-5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left2"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right2"/></svg></button>',
        mobileFirst: true
      });
    }

    //слайдер конфигураций
    if($('.js-list-8').length) {
      $('.js-list-8').on('init', function(event, slick) {
        var list = $('.js-list-8').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-8').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true
      });
    }
  }

  //слайдер игр
  if($('.js-list-2').length) {
    $('.js-list-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left2"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right2"/></svg></button>',
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
        },
      ]
    });
  }
  /******js для страницы лендинга evolv******/
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass("is-active");
  $(".menu-block").toggleClass("is-open");
  $(".menu-block__inner").toggleClass("is-open");
  if($(this).hasClass('is-active')) {
    bodyScrollLock.disableBodyScroll(targetElement);
  } else {
    bodyScrollLock.enableBodyScroll(targetElement);
  }
  return false;
});

//блок геопозиции
$(document).on('click', '.js-location', function () {
  $('.header__location').toggleClass('is-active');
  return false;
});

$(document).on('focus', '.js-location-list', function () {
  $('.location__suggest').show();
});

$(document).on('blur', '.js-location-list', function () {
  $('.location__suggest').hide();
});

//переключение баннеров в .block-2
$(document).on('click', '.js-b2-nav', function () {
  $('.js-b2-nav').removeClass('is-active');
  $(this).addClass('is-active');
  $('.block-2__banner').removeClass('is-active');
  $('.block-2__banner[data-target='+ $(this).attr('data-target') +']').addClass('is-active');
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

//faq togglers
$(document).on('click', '.js-faq-mobile-toggler', function () {
  var el = $(this);
  el.next('.faq__questions-block').slideToggle();
  el.toggleClass('is-active');
  return false;
});

$(document).on('click', '.js-faq-toggler', function () {
  var el = $(this);
  if(!el.hasClass('is-active')) {
    $('.js-faq-toggler').removeClass('is-active');
    el.addClass('is-active');
    $('.faq__section.is-active').slideToggle('300', function () {
      $('.faq__section.is-active').removeClass('is-active');
      $('.faq__section[data-target="'+el.attr('data-target')+'"]').slideToggle('300').addClass('is-active');
    });
  }
  return false;
});

$(document).on('click', '.js-question-toggler', function () {
  var el = $(this);
  el.find('.question__body').slideToggle();
  el.toggleClass('is-open');
  return false;
});

$(window).on("orientationchange", function(event) {
  $('.faq__questions-block, .faq__section').attr('style', '');
});

//раздел каталога
$(document).on('click', '.js-filter-opener', function () {
  $('.catalog-filter__dropdown').toggleClass('is-open');
  if($('.catalog-filter__dropdown').hasClass('is-open')){
    $(this).find('span').text('Скрыть');
  }else{
    $(this).find('span').text($(this).attr('data-text'));
  }
  return false;
});

$(document).on('click', '.detail-tabs-nav__link', function () {
  $('.detail-tabs-nav__link').removeClass('is-active');
  $(this).addClass('is-active');
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - $('.js-detail-menu').height() - $('.header').height()
  }, 400);
  return false;
});
