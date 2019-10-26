const projects = document.querySelectorAll('.project');

const toggleProjectTitleOnKeyDown = event => {
	event.key === 'Enter' &&
		toggleProjectTitle(event);
}

const toggleProjectTitle = event => {
	const projectTitle = event.target.children[1];

	!projectTitle.className.match('hidden') ?
		projectTitle.className = 'project__title project__title_hidden' :
		projectTitle.className = 'project__title';
}

projects.forEach(project => project.addEventListener('keydown', toggleProjectTitleOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', toggleProjectTitle));
projects.forEach(project => project.addEventListener('mouseleave', toggleProjectTitle));
