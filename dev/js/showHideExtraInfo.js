const navbar = document.querySelectorAll('#nav a');
const back = document.getElementById('back');
const front = document.getElementById('front');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const projects = document.querySelectorAll('.project');
const projectsInfo = document.getElementById('projects-info');
const projectContent = document.querySelectorAll('.project__content');
const goBack = document.querySelectorAll('.go-back');
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


// open the whole project after you clicked the project card
function showProject() {
	portfolioSection.style.display = 'none';
	closeIcon.style.display = 'none';
	projectsInfo.style.display = 'block';

	let clickedThumb = this.classList[1]; // the class is the unic name of the project

	projectContent.forEach(project => {
		let comparedProject = project.classList[1];

		if (clickedThumb === comparedProject) {
			project.style.display = 'flex';
		}
	});
}


// slider
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


// close the opened project and go back to the portfolio section
function goToPortfolio() {
	projectContent.forEach(project => project.style.display = 'none');
	projectsInfo.style.display = 'none';
	closeIcon.style.display = 'block';
	portfolioSection.style.display = 'flex';
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
projects.forEach(project => project.addEventListener('click', showProject));
goBack.forEach(back => back.addEventListener('click', goToPortfolio));
closeIcon.addEventListener('click', hideInfo);

