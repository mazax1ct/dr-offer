$(document).on('focus', 'input[type="text"], textarea', function () {
  $('.float-bar').addClass('hidden');
});

$(document).on('blur', 'input[type="text"], textarea', function () {
  $('.float-bar').removeClass('hidden');
});
