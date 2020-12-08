$(document).on('click', '.js-quantity-decrease', function () {
  var value = Number($(this).parent('.quantity').find('.quantity__input').val());
  if(value > 1) {
    $(this).parent('.quantity').find('.quantity__input').val(Number(value-1));
  } else {
    $(this).parent('.quantity').find('.quantity__input').val(Number(1));
  }

  return false;
});

$(document).on('click', '.js-quantity-increase', function () {
  var value = Number($(this).parent('.quantity').find('.quantity__input').val());
  $(this).parent('.quantity').find('.quantity__input').val(Number(value+1));
  return false;
});
