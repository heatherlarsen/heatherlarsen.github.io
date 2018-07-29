// index.js
$(function() {
	// scroll down -- FIX THIS
  	/*
  	$('.scroll').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({scrollTop: $($(this).find('a').attr('href')).offset().top}, 1500, 'linear');
  	});
  	*/

  	//AOS.init({disable: 'mobile'});

  	/*$('.main-carousel').flickity({
	  // options
	  freeScroll: true,
	  cellAlign: 'left',
	  contain: true
	});
	*/

	$(window).scroll(function(){                          
        if ($(this).scrollTop() > 500) {
            $('.small-header').fadeIn(500);
        } else {
            $('.small-header').fadeOut(500);
        }
    });
});

// scroll larger header to small header -- FIX THIS
/*
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
		$('.top-wrap').addClass('shrink');
		$('.scroll').addClass('is-hidden');
		$('.sm-name').removeClass('is-hidden');
		$('.lg-name').addClass('is-hidden');
	} else {
		$('.top-wrap').removeClass('shrink');
		$('.scroll').removeClass('is-hidden');
		$('.sm-name').addClass('is-hidden');
		$('.lg-name').removeClass('is-hidden');
	}
});
*/