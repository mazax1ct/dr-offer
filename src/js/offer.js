//переключение конфига
$(document).on('click', '.conf__list-item', function() {
  $('.conf__list-item').removeClass('slick-current');
  $(this).addClass('slick-current');
  var size = $(this).attr('data-size');
  $('.js-conf-size').text(size);
  return false;
});

//смена текста в блоке размера
$('.js-configs-list').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  var size = $(".conf__list-item:eq("+currentSlide+")").attr('data-size');
  $('.js-conf-size').text(size);
});

//закрываем описание конфига при перелистывании слайдера
$('.js-configs-list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.js-conf-open').removeClass('is-active');
  $('.conf-item__config-inner').removeClass('is-active');
});

//открытие/закрытие описания конфигурации
$(document).on('click', '.js-conf-open', function() {
  $(this).toggleClass('is-active');
  $(this).prev('.conf-item__config-inner').toggleClass('is-active');
  return false;
});

$(document).ready(function () {
  //слайдер списка конфигураций
  if($('.js-configs-list').length && $('body').width() < 1024) {
    $('.js-configs-list').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      mobileFirst: true,
      prevArrow: '<button class="conf__list-button conf__list-button--prev" aria-label="Назад" type="button"><svg class="conf__list-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_prev"/></svg></button>',
      nextArrow: '<button class="conf__list-button conf__list-button--next" aria-label="Вперед" type="button"><svg class="conf__list-button-icon" aria-hidden="true"><use xlink:href="#slider_arrow_next"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
});

/**************************загрузка файла*******************************/
const inputElement = document.getElementById("upload_zone");

inputElement.addEventListener("change", handleFiles, false);

function handleFiles(event) {
  const fileList = this.files;

  if (fileList[0].type.startsWith('image/')) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var backBlock = document.getElementById("dropbox");
      backBlock.style.backgroundImage = "url("+event.target.result+")";
      backBlock.classList.add('uploaded');
    };

    reader.readAsDataURL(fileList[0]);
  }
}

var dropbox;
dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function handleFiles2(files) {
  if (files[0].type.startsWith('image/')) {
    var reader = new FileReader();

    reader.onload = function(event) {
      var backBlock = document.getElementById("dropbox");
      backBlock.style.backgroundImage = "url("+event.target.result+")";
      backBlock.classList.add('uploaded');
    };

    reader.readAsDataURL(files[0]);
  }
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles2(files);
}

$(document).on('click', '.js-clear-upload', function () {
  $('.upload').css('background-image', '');
  inputElement.value = '';
  console.log(inputElement.value);
  $('.upload').removeClass('uploaded');
});
/**************************загрузка файла*******************************/

//переключение изображения дефолтного дизайна
$(document).on('click', '.js-design-item', function () {
  console.log($(this).attr('data-src'));
  $('.js-design-image').attr('src', $(this).attr('data-src'));
});

//переключение на следующий шаг конфигуратора
$(document).on('click', '.js-conf-next', function () {
  $('.conf__section.is-active').fadeOut( 300, "linear", function() {
    $('.conf__section.is-active').css('display', 'none');
    setTimeout(function() {
      $('.conf__section.is-active').next('.conf__section').fadeIn().css('display', 'flex').addClass('is-active');
      $('.conf__section.is-active').prev('.conf__section').removeClass('is-active');
    },300);
  });
  return false;
});

//переключение на предыдущий шаг конфигуратора
$(document).on('click', '.js-conf-back', function () {
  $('.conf__section.is-active').fadeOut( 300, "linear", function() {
    $('.conf__section.is-active').css('display', 'none');
    setTimeout(function() {
      $('.conf__section.is-active').prev('.conf__section').fadeIn().css('display', 'flex').addClass('is-active');
      $('.conf__section.is-active').next('.conf__section').removeClass('is-active');
    },300);
  });
  return false;
});
