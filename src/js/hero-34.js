$(document).ready(function() {
  if($('.js-hero-34-slider').length) {
    $('.js-hero-34-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      mobileFirst: true,
      draggable: false,
      swipe: false,
      asNavFor: '.js-hero-34-thumbs'
    });
  }

  if($('.js-hero-34-thumbs').length) {
    $('.js-hero-34-thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button class="hero-34__thumbs-button hero-34__thumbs-button--prev" aria-label="Назад" type="button"><svg class="hero-34__thumbs-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
      nextArrow: '<button class="hero-34__thumbs-button hero-34__thumbs-button--next" aria-label="Вперед" type="button"><svg class="hero-34__thumbs-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>',
      mobileFirst: true,
      asNavFor: '.js-hero-34-slider',
      focusOnSelect: true,
      infinite: false
    });
  }
});
