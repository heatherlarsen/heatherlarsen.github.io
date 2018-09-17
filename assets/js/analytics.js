// analytics.js

function initAnalytics() {
	if (debug) console.log('initAnalytics()');

	
	$('.js-ga').on('click', function() {
		// check if element has analytics data attribute
		if ($(this).data('ga')) {

			var data = $(this).data('ga').split(',');
			var category = $.trim(data[0]);
			var label = $.trim(data[1]);

			ga('send', 'event', category, 'click', label);
		}
	});
}
