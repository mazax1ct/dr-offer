//открытие/закрытие меню конфигуратора
$(document).on('click', '.js-config-menu', function () {
  $('body').toggleClass('overflow');
  $(this).toggleClass("is-active");
  $(".personal-menu").toggleClass("is-open");
  return false;
});

//открытие/закрытие главного меню
$(document).on('click', '.js-main-menu', function () {
  $(this).toggleClass("is-active");
  $('.personal-menu').toggle();
  $(".main-menu").toggleClass("is-open");
  return false;
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});

//табы в настройках профиля
$(document).on('click', '.tabs-menu__link', function () {
  $('.tabs-menu__link').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tab').removeClass('is-active');
  $('.tab[data-target=' + $(this).attr('data-link') + ']').addClass('is-active');
  return false;
});

$(document).ready(function () {
  //кастомный селект
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });

  //сортировка в таблице
  $(".js-sort").addSortWidget();

 //запуск плавающего блока с ценой в детальном описании конфигурации
 if ($(".js-sticky-block").length) {
   var offTop;
   if($('body').width() >= 768 && $('body').width() < 992) {
     offTop = 150;
   }

   if($('body').width() > 992) {
     offTop = 193;
   }

   if ($("body").width() >= 768) {
     $(".js-sticky-block").trigger("sticky_kit:detach");
     setTimeout(function() {
       $(".js-sticky-block").stick_in_parent({
         parent: '.config-detail__right',
         offset_top: offTop
       });
     }, 100);
   }

   //если блок для контента пустой, открепляем плавающий блок
   if ($(".js-content-with-sticky").length) {
     if ($('.js-content-with-sticky').html().trim() === '') {
       $(".js-sticky-block").trigger("sticky_kit:detach");
     }
   }
 }
});

//тогл описания в корзине
$(document).on('click', '.js-cart-description-opener', function () {
  $(this).parent().toggleClass('is-open');
  $(".cart-table__description[data-target=" + $(this).attr("data-link") + "]").slideToggle(300);
  return false;
});

//открытие/закрытие доставки
$(document).on('click', '.js-delivery', function () {
  if(!$(this).parent().hasClass('is-open')) {
    $('.delivery__info').slideUp();
    $('.delivery').removeClass('is-open');
    $(this).parent().addClass('is-open');
    $(this).next('.delivery__info').slideToggle();
  }
  return false;
});

//мокго города нет
$(document).on('click', '.js-no-city', function () {
  $('.no-city-hidden').slideToggle();
  return false;
});
