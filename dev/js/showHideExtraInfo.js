const navbar = document.querySelectorAll('#nav');
const back = document.getElementById('back');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	console.log(event.target.className);
	back.style.display = 'block';

	if (event.target.className === 'about') aboutSection.style.display = 'block';
	else portfolioSection.style.display = 'block';
}

function hideInfo() {
	if (aboutSection.style.display = 'block') aboutSection.style.display = 'none';
	else portfolioSection.style.display = 'none';
	back.style.display = 'none';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

