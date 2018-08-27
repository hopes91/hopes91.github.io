const portfolioSection = document.getElementById('portfolio');
const projects = document.querySelectorAll('.project');
const projectsInfo = document.getElementById('projects-info');
const projectContent = document.querySelectorAll('.project__content');
const goBack = document.querySelectorAll('.go-back');
const closeIcon = document.getElementById('close');

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

// close the opened project and go back to the portfolio section
function goToPortfolio() {
	projectContent.forEach(project => project.style.display = 'none');
	projectsInfo.style.display = 'none';
	closeIcon.style.display = 'block';
	portfolioSection.style.display = 'flex';
}

projects.forEach(project => project.addEventListener('click', showProject));
goBack.forEach(back => back.addEventListener('click', goToPortfolio));

