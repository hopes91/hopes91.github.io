const navbar = document.querySelectorAll('#nav');
const back = document.getElementById('back');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	console.log(event.target);
	back.style.display = 'block';
}

function hideInfo() {
	back.style.display = 'none';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

