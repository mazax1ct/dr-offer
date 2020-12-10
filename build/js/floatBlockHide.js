$(document).on('focus', 'input, textarea', function () {
  $('.float-bar').addClass('hidden');
});

$(document).on('blur', 'input, textarea', function () {
  $('.float-bar').removeClass('hidden');
});
