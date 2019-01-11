let projects = document.querySelectorAll('.project');

const showProjectTitle = event => {
	let projectTitle = event.target.children[1]; // div with a class "project__title"

	projectTitle.className = 'project__title project__title-active';
}

const hideProjectTitle = event => {
	let projectTitle = event.target.children[1];

	projectTitle.className = 'project__title';
}

projects.forEach(project => project.addEventListener('mouseenter', showProjectTitle));
projects.forEach(project => project.addEventListener('mouseleave', hideProjectTitle));
