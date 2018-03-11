$(document).ready(function() {
	const scrollToAnchor = (aid) => {
		const anchTag = $('#' + aid);
		$('html, body').animate({scrollTop: anchTag.offset().top}, 1100);
	}

	$('#arrow-down').click(function() {
		scrollToAnchor('content');
	});


	$(window).scroll(function() {
		$('#photo')['fade' + ($(this).scrollTop() > 50 ? 'In' : 'Out')](1500);
		$('.text')['fade' + ($(this).scrollTop() > 100 ? 'In' : 'Out')](1500);
	});
});