//переключение табов форм-фактор/fps в играх
$(document).on('click', '.js-tab-changer', function () {
  var el = $(this);
  $('.js-tab-changer').removeClass('is-active');
  el.addClass('is-active');

  $('.selection__tab.is-active').animate({
    opacity: 0
  }, 400, function() {
    $('.selection__tab.is-active').removeClass('is-active');
    $('.selection__tab[data-target='+el.attr('data-target')+']').addClass('is-active');
    if($('body').width() < 1200) {
      $('.js-cfg-slider').slick('setPosition');
    }
    $('.selection__tab[data-target='+el.attr('data-target')+']').animate({
      opacity: 1
    }, 400);
  });

  return false;
});

$(document).ready(function() {
  if($('body').width() < 1200) {
    //слайдер конфигураций
    if($('.js-cfg-slider').length) {
      /*$('.js-cfg-slider').on('init', function(event, slick) {
        var list = $('.js-cfg-slider').find('.slick-dots');
        $.each(list['0'].children, function(index, value) {
          if(index < 9) {
            list['0'].children[index].children['0'].innerText = '0' + list['0'].children[index].children['0'].innerText;
          }
        });
      });*/

      $('.js-cfg-slider').slick({
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
