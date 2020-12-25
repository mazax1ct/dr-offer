$(document).on('click', '.js-tabs-nav', function () {
  $(this).parent().find('.js-tabs-nav').removeClass('is-active');
  $(this).addClass('is-active');
  $('.js-hero-tabs[data-tabs="'+$(this).closest('.js-hero-tabs-nav').attr('data-tabs')+'"] .hero-tab').removeClass('is-active');
  $('.js-hero-tabs[data-tabs="'+$(this).closest('.js-hero-tabs-nav').attr('data-tabs')+'"] .hero-tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});
