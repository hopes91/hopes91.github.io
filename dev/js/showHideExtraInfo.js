const navbar = document.querySelectorAll('#nav');
const front = document.getElementById('front');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	front.style.display = 'block';

	if (event.target.className === 'about') {
		portfolioSection.style.display = 'none';
		aboutSection.style.display = 'block';
	} else {
		aboutSection.style.display = 'none';
		portfolioSection.style.display = 'flex';
	}
}

function hideInfo() {
	aboutSection.style.display = 'none';
	portfolioSection.style.display = 'none';
	front.style.display = 'none';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

