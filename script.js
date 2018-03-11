$(document).ready(function() {
	const scrollToAnchor = (aid) => {
		const anchTag = $('#' + aid);
		$('html, body').animate({scrollTop: aTag.offset().top}, 1200);
	}

	$('#arrow-down').click(function() {
		scrollToAnchor('content');
	});
});