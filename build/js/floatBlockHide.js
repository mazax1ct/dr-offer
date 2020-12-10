$(document).on('focus', 'input, textarea', function () {
  $('.float-bar').hide();
});

$(document).on('blur', 'input, textarea', function () {
  $('.float-bar').show();
});
