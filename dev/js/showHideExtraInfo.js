const navbar = document.querySelectorAll('#nav');
const back = document.getElementById('back');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	back.style.display = 'block';

	if (event.target.className === 'about') {
		aboutSection.style.display = 'block';
		closeIcon.style.color = '#000';
	} else {
		portfolioSection.style.display = 'flex';
		closeIcon.style.color = '#F4EE4B';
	}
}

function hideInfo() {
	aboutSection.style.display = 'none';
	portfolioSection.style.display = 'none';
	back.style.display = 'none';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

