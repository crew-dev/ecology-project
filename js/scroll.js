$('a[href^="#"').on('click', function() {
  let href = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(href).offset().top
  },650);
	return false; 
});