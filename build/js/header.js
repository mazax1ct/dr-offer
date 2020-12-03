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
function isTouchDevice() {
  return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

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
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//элемент для bodyScrollLock
var targetElement = document.querySelector(".menu-block__inner");

//открытие/закрытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass("is-active");
    $(".menu-block").addClass("is-open");
    $(".menu-block__inner").addClass("is-open");
    $(".main-menu").addClass("is-open");
    bodyScrollLock.disableBodyScroll(targetElement);
    document.addEventListener('click', closeMenu);
  } else {
    $(this).removeClass("is-active");
    $(".menu-block").removeClass("is-open");
    $(".menu-block__inner").removeClass("is-open");
    $(".main-menu").removeClass("is-open");
    bodyScrollLock.enableBodyScroll(targetElement);
    document.removeEventListener('click', closeMenu);
  }
  return false;
});

//открытие/закрытие меню пользователя
$(document).on('click', '.js-personal-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass("is-active");
    $(".menu-block").addClass("is-open");
    $(".menu-block__inner").addClass("is-open");
    $(".personal-menu").addClass("is-open");
    bodyScrollLock.disableBodyScroll(targetElement);
    document.addEventListener('click', closeMenu);
  } else {
    $(this).removeClass("is-active");
    $(".menu-block").removeClass("is-open");
    $(".menu-block__inner").removeClass("is-open");
    $(".personal-menu").removeClass("is-open");
    bodyScrollLock.enableBodyScroll(targetElement);
    document.removeEventListener('click', closeMenu);
  }
  return false;
});

function closeMenu(evt) {
  if (!$('.menu-block__inner').is(evt.target) && $('.menu-block__inner').has(evt.target).length === 0) {
    $('.js-menu-toggler, .js-personal-toggler').removeClass("is-active");
    $(".menu-block").removeClass("is-open");
    $(".menu-block__inner").removeClass("is-open");
    $(".main-menu, .personal-menu").removeClass("is-open");
    bodyScrollLock.enableBodyScroll(targetElement);
    document.removeEventListener('click', closeMenu);
	}
}

$(document).on('click', '.js-menu-closer', function () {
  $('.js-menu-toggler').removeClass("is-active");
  $(".menu-block").removeClass("is-open");
  $(".menu-block__inner").removeClass("is-open");
  $(".main-menu, .personal-menu").removeClass("is-open");
  bodyScrollLock.enableBodyScroll(targetElement);
  document.removeEventListener('click', closeMenu);
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
