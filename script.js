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
				$('.text p:first-child').fadeIn(1500).addClass('fadeInUp');
			}, 1500);
			setTimeout(function() {
				$('.text p:last-child').fadeIn(1500).addClass('fadeInUp');
			}, 2000);
		} else {
			$('#photo, .text p:first-child, .text p:last-child').fadeOut(1500).removeClass('fadeInUp');
		}
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 350) {
			setTimeout(function() {
				$('.project:first-child img').fadeIn(1500).addClass('fadeInUp');
			}, 500);
			setTimeout(function() {
				$('.project:nth-child(2) img').fadeIn(1500).addClass('fadeInUp');
			}, 700);
			setTimeout(function() {
				$('.project:nth-child(3) img').fadeIn(1500).addClass('fadeInUp');
			}, 800);
			setTimeout(function() {
				$('.project:last-child img').fadeIn(1500).addClass('fadeInUp');
			}, 1000);
		}
	});


	$('.project__img').hover(function() {
		$(this).addClass('on-top');
	},
	function() {
		$(this).removeClass('on-top');
	});


	setTimeout(function() {
		$('.project__img-one').fadeIn(1000).addClass('fadeInLeft');
		}, 1000);
		setTimeout(function() {
			$('.project__img-two').fadeIn(1000).addClass('fadeInLeft');
			}, 1500);
		setTimeout(function() {
			$('.project__img-three').fadeIn(1000).addClass('fadeInLeft');
		}, 2000);
		setTimeout(function() {
			$('.project__img-four').fadeIn(1000).addClass('fadeInLeft');
		}, 2500);
		setTimeout(function() {
			$('.arrow-left img').fadeIn(1000).addClass('fadeInLeft');
			$('.project__text').fadeIn(1000).addClass('fadeInRight');
		}, 3000);
});