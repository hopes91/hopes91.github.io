const projects = document.querySelectorAll('.portfolio__project');

const toggleProjectTitleOnKeyDown = (event) => {
	event.key === 'Enter' &&
		toggleProjectTitle(event);
}

const toggleProjectTitle = (event) => {
	const projectTitle = event.target.children[1];

	!projectTitle.className.match('hidden') ?
		projectTitle.classList.add('portfolio__project-title_hidden') :
		projectTitle.classList.remove('portfolio__project-title_hidden');
}

projects.forEach((project) => project.addEventListener('keydown', toggleProjectTitleOnKeyDown));
projects.forEach((project) => project.addEventListener('mouseenter', toggleProjectTitle));
projects.forEach((project) => project.addEventListener('mouseleave', toggleProjectTitle));
