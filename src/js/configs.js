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

//переключение игр в списке
$(document).on('click', '.js-game', function () {
  $('.js-game').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

$(document).ready(function() {
  if($('body').width() < 1200) {
    //слайдер конфигураций
    if($('.js-list-9').length) {
      $('.js-list-9').on('init', function(event, slick) {
        var list = $('.js-list-9').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });

      $('.js-list-9').slick({
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
