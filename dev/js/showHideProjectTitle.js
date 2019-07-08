const projects = document.querySelectorAll('.index__back-portfolio-project');

const toggleProjectTitleOnKeyDown = event => {
	if (event.key !== 'Enter') return;

	toggleProjectTitle(event);
}

const toggleProjectTitle = event => {
	let projectTitle = event.target.children[1];

	if (!projectTitle.className.match('hidden')) {
		projectTitle.classList.add('index__back-portfolio-project-title_hidden');
	} else {
		projectTitle.classList.remove('index__back-portfolio-project-title_hidden');
	}
}

projects.forEach(project => project.addEventListener('keydown', toggleProjectTitleOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', toggleProjectTitle));
projects.forEach(project => project.addEventListener('mouseleave', toggleProjectTitle));
