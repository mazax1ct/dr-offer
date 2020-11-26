//фонарик
Array.from(
  document.querySelectorAll('.js-fancy-light'),
  function(el) {
    el.addEventListener('mousemove',function(e){
      var rect = el.getBoundingClientRect()
      el.style.setProperty('--px', e.clientX - rect.left);
      el.style.setProperty('--py', e.clientY - rect.top);
    });
  });
