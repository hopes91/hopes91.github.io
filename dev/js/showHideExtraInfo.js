const navbar = document.querySelectorAll('#nav a');
const back = document.getElementById('back');
const front = document.getElementById('front');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const projectsInfo = document.getElementById('projects-info');
const closeIcon = document.getElementById('close');

// open the div in which you can look at the "about me" and "portfolio" sections, and also all of my projects
function showInfo(event) {
	back.style.zIndex = '10';
	front.style.display = 'block';

	if ((event.target.className === 'about' || event.target.className === 'portfolio') 
	&& projectsInfo.style.display === 'block') { // if any project is opened
		// do not show the about or portfolio sections
		aboutSection.style.display = 'none';
		portfolioSection.style.display = 'none';
	} else if (event.target.className === 'about') {
		portfolioSection.style.display = 'none';
		navbar[1].style.backgroundColor = 'transparent';
		aboutSection.style.display = 'block';
		event.target.style.backgroundColor = '#00A1C0';
	} else {
		aboutSection.style.display = 'none';
		navbar[0].style.backgroundColor = 'transparent';
		portfolioSection.style.display = 'flex';
		event.target.style.backgroundColor = '#00A1C0';
	}
}

// close the div in which you can look at the "about me" and "portfolio" sections, and also all of my projects
function hideInfo() {
	aboutSection.style.display = 'none';
	navbar[0].style.backgroundColor = 'transparent';
	portfolioSection.style.display = 'none';
	navbar[1].style.backgroundColor = 'transparent';
	front.style.display = 'none';
	back.style.zIndex = '0';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
closeIcon.addEventListener('click', hideInfo);

