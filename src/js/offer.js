//скролл текущей кнопки в область видимости контейнера
function controlsScroll(elem) {
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

//подмотка к началу блока
function scrollToBlockStart() {
  var confOffset = $('.conf').offset().top;
  $('html, body').animate({scrollTop:confOffset}, '300');
}

//переключение конфига
$(document).on('click', '.conf__list-item', function() {
  $('.conf__list-item').removeClass('slick-current');
  $(this).addClass('slick-current');
  var size = $(this).attr('data-size');
  $('.js-conf-size').text(size);
  $('.pcr__image').removeClass('size_s size_m size_l size_x').addClass('size_'+ size);

  $(this).find('.js-conf-open').toggleClass('is-active');
  $(this).find('.conf-item__config-inner').toggleClass('is-active');
  return false;
});

//смена текста в блоке размера
$('.js-configs-list').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  var size = $(".conf__list-item:eq("+currentSlide+")").attr('data-size');
  $('.js-conf-size').text(size);
  $('.pcr__image').removeClass('size_s size_m size_l size_x').addClass('size_'+ size);
});

//закрываем описание конфига при перелистывании слайдера конфигураций
$('.js-configs-list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.js-conf-open').removeClass('is-active');
  $('.conf-item__config-inner').removeClass('is-active');
});

//открытие/закрытие описания конфигурации
/*$(document).on('click', '.js-conf-open', function() {
  $(this).toggleClass('is-active');
  $(this).prev('.conf-item__config-inner').toggleClass('is-active');
  return false;
});*/

$(document).on('mouseleave', '.conf-item', function() {
  $(this).find('.js-conf-open').removeClass('is-active');
  $(this).find('.conf-item__config-inner').removeClass('is-active');
});

$(document).ready(function () {
  //слайдер списка конфигураций
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
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
      ]
    });
  }

  //слайдер блоков конфигурации в мобильной версии
  if($('.js-pcr-slider').length && $('body').width() < 768) {
    $('.js-pcr-slider').slick({
      adaptiveHeight: true,
      draggable: true,
      swipe: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      appendArrows: $('.pcr__controls'),
      prevArrow: '<button class="pcr__controls-button pcr__controls-button--prev" type="button" title="Назад"></button>',
      nextArrow: '<button class="pcr__controls-button pcr__controls-button--next" type="button" title="Вперёд"></button>'
    });
  }
});

//update слайдера списка конфигураций и слайдер блоков конфигурации в мобильной версии при смене ориентации
$(window).on( "orientationchange", function( event ) {
  $('.js-configs-list').slick('setPosition');
  $('.js-pcr-slider').slick('setPosition');
});

/**************************загрузка файла*******************************/
//загрузка файла через проводник
$(document).on('change', '.js-upload-zone', function (event) {
  const fileList = this.files;

  if (fileList[0].type.startsWith('image/')) {
    var reader = new FileReader();

    reader.onload = function(event) {
      $('.js-dropbox').css('background-image', 'url("' + event.target.result + '")').addClass('uploaded');
    };

    reader.readAsDataURL(fileList[0]);
  }
});

//отмена стандартных событий
$(document).on('dragover dragleave', '.js-dropbox', function () {
  event.preventDefault();
  event.stopPropagation();
});

//дроп файла на область загрузки
$(document).on('drop', '.js-dropbox', function () {
  event.preventDefault();
  event.stopPropagation();

  const inputFile = event.originalTarget.control;

  inputFile.files = event.dataTransfer.files;

  if (inputFile.files[0].type.startsWith('image/')) {
    var reader = new FileReader();

    reader.onload = function(event) {
      $('.js-dropbox').css('background-image', 'url("' + event.target.result + '")').addClass('uploaded');
    };

    reader.readAsDataURL(inputFile.files[0]);
  }
});

//очистка поля загруженного файла
$(document).on('click', '.js-clear-upload', function () {
  $('.js-dropbox').css('background-image', '').removeClass('uploaded');
  $('.js-upload-zone').val('');
});
/**************************загрузка файла*******************************/

//переключение изображения дефолтного дизайна
$(document).on('click', '.js-design-item', function () {
  $('.js-design-image').attr('src', $(this).attr('data-src'));
  //смена состояния радио дублированных блоков
  var labelID = $(this).attr('data-id');
  $('.js-design-item[data-id="'+labelID+'"]').prev('.design__radio').click();
});

//переключение на следующий шаг конфигуратора
$(document).on('click', '.js-conf-next', function () {
  var currentSection = $('.conf__section.is-active');
  currentSection.removeClass('visible');
  setTimeout(function() {
    currentSection.removeClass('is-active');
    currentSection.next('.conf__section').addClass('is-active');
    if($('body').width() < 1024) {
      setTimeout(function() {
        $('.js-configs-list').slick('setPosition');
      },200);
    }
    if($('body').width() < 769) {
      setTimeout(function() {
        $('.js-pcr-slider').slick('setPosition');
      },200);
    }
    setTimeout(function() {
      currentSection.next('.conf__section').addClass('visible');
    },300);
  },300);
  scrollToBlockStart();
  return false;
});

//переключение на предыдущий шаг конфигуратора
$(document).on('click', '.js-conf-back', function () {
  var currentSection = $('.conf__section.is-active');
  currentSection.removeClass('visible');
  setTimeout(function() {
    currentSection.removeClass('is-active');
    currentSection.prev('.conf__section').addClass('is-active');
    if($('body').width() < 1024) {
      setTimeout(function() {
        $('.js-configs-list').slick('setPosition');
      },200);
    }
    if($('body').width() < 769) {
      setTimeout(function() {
        $('.js-pcr-slider').slick('setPosition');
      },200);
    }
    setTimeout(function() {
      currentSection.prev('.conf__section').addClass('visible');
    },300);
  },300);
  scrollToBlockStart();
  return false;
});

//открытие/закрытие блока комлектующего
var sliderLock = false;
$(document).on('click', '.js-part', function () {
  $(this).toggleClass('is-active');
  if($(this).hasClass('is-active')) {
    $(this).next('.parts-dropdown').slideDown(300, function () {
      //лочим слайдер блоков конфигурации в мобильной версии
      if(sliderLock == false) {
        $('.js-pcr-slider.slick-initialized').slick('slickSetOption', {
           draggable: false,
           swipe: false
        }, true);
        sliderLock = true;
      }
    });
  } else {
    $(this).next('.parts-dropdown').slideUp(300, function () {
      //снимаем lock со слайдера блоков конфигурации в мобильной версии
      if(!$('.js-part.is-active').length) {
        $('.js-pcr-slider.slick-initialized').slick('slickSetOption', {
           draggable: true,
           swipe: true
        }, true);
        sliderLock = false;
      }
    });
  }
  return false;
});

//переключение табов в блоке комплектующего
$(document).on('click', '.js-parts-tab', function () {
  $(this).parent().find('.js-parts-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.parts-dropdown').find('.parts-dropdown__tab').removeClass('is-active');
  $('.parts-dropdown__tab[data-tab="'+$(this).attr('data-tab')+'"]').addClass('is-active');
  controlsScroll($(this));
  return false;
});

//тултип в списке комплектующих
$(document).on('click', '.js-tooltip', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
  } else {
    $('.js-tooltip').removeClass('is-active');
    $(this).addClass('is-active');
  }
  return false;
});

//переключение слайдера конфигурации в мобильной версии
$(document).on('click', '.js-pcr-btn', function () {
  controlsScroll($(this));
  $('.js-pcr-slider.slick-initialized').slick('slickGoTo', $(this).index());
  return false;
});

$(document).on('beforeChange', '.js-pcr-slider.slick-initialized', function(event, slick, currentSlide, nextSlide) {
  $('.js-pcr-btn').removeClass('is-active');
  $('.js-pcr-btn:eq("'+nextSlide+'")').addClass('is-active');
  controlsScroll($('.js-pcr-btn:eq("'+nextSlide+'")'));
  //закрываем открытые блоки комлектующих и снимаем lock со слайдера блоков конфигурации в мобильной версии
  $('.js-part').removeClass('is-active');
  $('.parts-dropdown').slideUp(300, function () {
    $('.js-pcr-slider').slick('slickSetOption', {
       draggable: true,
       swipe: true
    }, true);
    sliderLock = false;
  });
});
