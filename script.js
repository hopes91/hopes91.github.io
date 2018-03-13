$(document).ready(function() {
	const scrollToAnchor = (aid) => {
		const anchTag = $('#' + aid);
		$('html, body').animate({scrollTop: anchTag.offset().top}, 1100);
	}

	$('#arrow-down').click(function() {
		scrollToAnchor('content');
	});


	$(window).scroll(function() {
		if($(this).scrollTop() > 50) {
			$('#photo').fadeIn(1500).addClass('fadeInUp');
			setTimeout(function() {
				$('.text p:first').fadeIn(1500).addClass('fadeInUp');
			}, 1500);
			setTimeout(function() {
				$('.text p:last').fadeIn(1500).addClass('fadeInUp');
			}, 1800);
		} else {
			$('#photo, .text p:first, .text p:last').fadeOut(1500).removeClass('fadeInUp');
		}
	});


	$('.project__img').hover(function() {
		$(this).addClass('on-top');
	},
	function() {
		$(this).removeClass('on-top');
	});
});