const navbar = document.querySelectorAll('#nav');
const back = document.getElementById('back');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	back.style.display = 'block';

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
	back.style.display = 'none';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

