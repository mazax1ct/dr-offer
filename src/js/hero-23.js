//скролл текущей кнопки в область видимости контейнера
function btnScroll(elem) {
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

//переключение игры
$(document).on('click', '.js-game-btn', function () {
  btnScroll($(this));
  $('.js-game-btn').removeClass('is-active');
  $(this).addClass('is-active');
  $.each($(this).data(), function(index, attr) {
    $(".hero-23__graph-value[data-"+index+"]").css('width', attr+'%').find('span').text(attr);
  });
  return false;
});

$(document).on('click', '.hero-23__games-control--prev', function () {
  $('.js-game-btn.is-active').prev('.js-game-btn').addClass('is-active');

  btnScroll($('.js-game-btn.is-active').prev('.js-game-btn'));

  $('.js-game-btn.is-active').next('.js-game-btn').removeClass('is-active');

  $.each($('.js-game-btn.is-active').data(), function(index, attr) {
    $(".hero-23__graph-value[data-"+index+"]").css('width', attr+'%').find('span').text(attr);
  });
  return false;
});

$(document).on('click', '.hero-23__games-control--next', function () {
  $('.js-game-btn.is-active').next('.js-game-btn').addClass('is-active');
  $.each($('.js-game-btn.is-active').next('.js-game-btn').data(), function(index, attr) {
    $(".hero-23__graph-value[data-"+index+"]").css('width', attr+'%').find('span').text(attr);
  });

  btnScroll($('.js-game-btn.is-active').next('.js-game-btn'));
  $('.js-game-btn.is-active').prev('.js-game-btn').removeClass('is-active');

  return false;
});
