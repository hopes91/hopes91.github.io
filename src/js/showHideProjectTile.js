const projects = document.querySelectorAll('.project');

const toggleProjectTileOnKeyDown = event => {
	event.key === 'Enter' &&
		toggleProjectTile(event);
};

const toggleProjectTile = event => {
	const projectTile = event.target.children[1];

	projectTile.className.match('opened') ?
		projectTile.className = 'project-tile closed' :
		projectTile.className = 'project-tile opened';
};

projects.forEach(project => project.addEventListener('keydown', toggleProjectTileOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', toggleProjectTile));
projects.forEach(project => project.addEventListener('mouseleave', toggleProjectTile));
