var debug = false;

// index.js
$(function() {

	var pageType = $("body").data("page");

	if (pageType === "projects") {
		initFilters();
	}

	initAnalytics();

	initHamburgerMenu();
});

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

function initHamburgerMenu() {
	if (debug) console.log('initHamburgerMenu()');

	$('.hamburger-menu').on('click', function() {
		$(this).find('.bars').toggleClass('is-hidden');
		$(this).find('.close').toggleClass('is-hidden');
		$('.nav-buttons').toggleClass('is-desktop');
	});
}