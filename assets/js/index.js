var debug = false;

// index.js
$(function() {

	var pageType = $("body").data("page");

	// run init functions by page
	var windowWidth = $(window).width();
	if (pageType === "home" && windowWidth > 640) {
		initScroll();
		initCarousel();
	} else if (pageType === "home") {
		initCarousel();
	}

	if (pageType === "projects") {
		initFilters();
	}

	/*
	if (pageType === "project") {
		initProjectNav();
	}
	*/

});

function initScroll() {
	if (debug) console.log('initScroll()');

	initScrollClick();
	initSmallHeader();

	function initScrollClick() {
		if (debug) console.log('initScrollClick()');

		// clickable scroll icon
		$('.scroll').on('click', function(e) {
			e.preventDefault();

			var el = $(this).find('a').attr('href');
			var offset = $(el).offset();

			$('html, body').animate({scrollTop: offset.top -80}, 800, 'linear');
		});
	}

	function initSmallHeader() {
		if (debug) console.log('initSmallHeader()');

		// show small header on scroll
		if ($('.homepage').length) {
			$(window).scroll(function() {
				if ($(this).scrollTop() > 500) {
					$('.small-header').fadeIn(300);
				} else {
					$('.small-header').fadeOut(300);
				}
			});
		}
	}
}


function initCarousel() {
	if (debug) console.log('initCarousel()');

	var carouselCount = countCarouselItems();

	var slider = tns({
		"container": ".main-carousel",
	    "items": 4,
	    "arrowKeys": true,
	    "controlsContainer": ".carousel-controls",
	    "loop": false,
	    "fixedWidth": 350,
	    "responsive": {
		    "350": {
		      "items": 2
		    },
		    "500": {
		      "items": 4
		    }
		  },
	    //"slideBy": "page",
	    "autoplay": false
	});

	function countCarouselItems() {
		return $('.main-carousel').find('a').length;
	}
}

function initProjectNav() {
	if (debug) console.log('initProjectNav()');

	$('.project-nav').on('click', function() {
		$('.project-nav').each(function() {
			$(this).removeClass('active');
		});

		$(this).addClass('active');
	});
}

function initFilters() {
	if (debug) console.log('initFilters()');

	$('.filter[data-filter="all"]').addClass('selected');

	$('.filter').on('click', function() {
		// unselect all filters
		$('.filter').each(function() {
			$(this).removeClass('selected');
		});

		// selected correct filter
		$(this).addClass('selected');

		// display results with matching data-type
		var selectedFilter = $(this).data("filter");

		if (selectedFilter === "all") {
			$('.filterable-project').each(function() {
				$(this).show();
			});
		} else {
			$('.filterable-project').each(function() {
				var type = $(this).data("type");

				// check for multiple types
				if (type.indexOf(',') > -1) {
					type = type.split(',');
					type = $.map(type, $.trim);	// trim all values in type array

					// check if selectedFilter is inArray
					if ($.inArray(selectedFilter, type) >= 0) {
						$(this).show();
					} else {
						$(this).hide();
					}
				} else {
					if (type === selectedFilter) {
						$(this).show();
					} else {
						$(this).hide();
					}
				}
			});
		}

	});
}