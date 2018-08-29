const projectContent = document.querySelectorAll('.project__content');

let index = 1;

function showSlides(n) {
	let images;
	let dots;

	projectContent.forEach(project => {
		if (project.style.display === 'flex') {
			images = project.children[0].children; // the images of the active (opened) project
			dots = project.children[1].children[2].children; // the dots of the active (opened) project
		}
	});

	if (n > images.length) index = 1;
	if (n < 1) index = images.length;

	for (let i = 0; i < images.length; i++) {
		images[i].style.display = 'none';
		images[index - 1].style.display = 'block';
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = '#000';
		dots[index - 1].style.backgroundColor = '#00A1C0';
	}
}

function moveSlides(n) {
	showSlides(index += n);
}

function currentSlide(n) {
	showSlides(index = n);
}

