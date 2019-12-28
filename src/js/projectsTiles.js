const projects = document.querySelectorAll('.project');

const toggleProjectTileOnKeyDown = event => {
	event.key === 'Enter' &&
		toggleProjectTile(event);
};

const toggleProjectTile = event => {
	const projectTile = event.target.children[1];

	if (projectTile.className.match('hidden')) {
		projectTile.className = 'project-tile project-tile_shown';
		projectTile.children[1].setAttribute('tabindex', '0');
	} else {
		projectTile.className = 'project-tile project-tile_hidden';
		projectTile.children[1].setAttribute('tabindex', '-1');
	}
};

projects.forEach(project => project.addEventListener('keydown', toggleProjectTileOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', toggleProjectTile));
projects.forEach(project => project.addEventListener('mouseleave', toggleProjectTile));
