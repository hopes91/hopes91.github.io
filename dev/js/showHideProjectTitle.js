// const projects = document.querySelectorAll('.portfolio__project');

const toggleProjectTitleOnKeyDown = event => {
	if (event.key !== 'Enter') return;

	toggleProjectTitle(event);
}

const toggleProjectTitle = event => {
	let projectTitle = event.target.children[1];

	if (!projectTitle.className.match('hidden')) {
		projectTitle.classList.add('portfolio__project-title_hidden');
	} else {
		projectTitle.classList.remove('portfolio__project-title_hidden');
	}
}

projects.forEach(project => project.addEventListener('keydown', toggleProjectTitleOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', toggleProjectTitle));
projects.forEach(project => project.addEventListener('mouseleave', toggleProjectTitle));
