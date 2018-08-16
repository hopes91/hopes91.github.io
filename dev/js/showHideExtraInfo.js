const navbar = document.querySelectorAll('#nav');
const back = document.getElementById('back');
const front = document.getElementById('front');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const projects = document.querySelectorAll('.project');
const projectsInfo = document.getElementById('projects-info');
const projectContent = document.querySelectorAll('.project__content');
const goBack = document.querySelectorAll('.go-back');
const closeIcon = document.getElementById('close');

function showInfo(event) {
	back.style.zIndex = '10';
	front.style.display = 'block';

	if (this.id === 'nav' && projectsInfo.style.display === 'block') {
		aboutSection.style.display = 'none';
		portfolioSection.style.display = 'none';
	} else if (event.target.className === 'about') {
		portfolioSection.style.display = 'none';
		aboutSection.style.display = 'block';
	} else {
		aboutSection.style.display = 'none';
		portfolioSection.style.display = 'flex';
	}
}

function showProject() {
	portfolioSection.style.display = 'none';
	closeIcon.style.display = 'none';
	projectsInfo.style.display = 'block';

	let clickedThumb = this.classList[1];

	projectContent.forEach(project => {
		let comparedProject = project.classList[1];

		if (clickedThumb === comparedProject) {
			project.style.display = 'block';
		}
	});
}

function goToPortfolio() {
	projectContent.forEach(project => project.style.display = 'none');
	projectsInfo.style.display = 'none';
	closeIcon.style.display = 'block';
	portfolioSection.style.display = 'flex';
}

function hideInfo() {
	aboutSection.style.display = 'none';
	portfolioSection.style.display = 'none';
	front.style.display = 'none';
	back.style.zIndex = '0';
}

navbar.forEach(link => link.addEventListener('click', showInfo));
projects.forEach(project => project.addEventListener('click', showProject));
goBack.forEach(back => back.addEventListener('click', goToPortfolio));
closeIcon.addEventListener('click', hideInfo);

