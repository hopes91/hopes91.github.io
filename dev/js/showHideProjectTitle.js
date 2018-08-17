const projects = document.querySelectorAll('.project');

function showProjectTitle(event) {
	let projectTitle = event.target.children[1]; // div with a class "project__title"
	projectTitle.classList.add('project__title-active');
}

function hideProjectTitle(event) {
	let projectTitle = event.target.children[1];
	projectTitle.classList.remove('project__title-active');
}

projects.forEach(project => project.addEventListener('mouseenter', showProjectTitle));
projects.forEach(project => project.addEventListener('mouseleave', hideProjectTitle));

