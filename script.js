$(document).ready(function() {
	const scrollToAnchor = (aid) => {
		const anchTag = $('#' + aid);
		$('html, body').animate({scrollTop: anchTag.offset().top}, 1100);
	}

	$('#arrow-down').click(function() {
		scrollToAnchor('content');
	});
});