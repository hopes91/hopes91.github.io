// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const projects = document.querySelectorAll('.project');

const toggleProjectTileOnKeyDown = event => {
	const projectTile = event.target.children[1];

	if (event.key === 'Enter') {
		projectTile.className.match('hidden') ?
			showProjectTile(event):
			hideProjectTile(event);
	}
};

const showProjectTile = event => {
	const projectTile = event.target.children[1];

	if (projectTile.className.match('hidden')) {
		projectTile.className = 'project-tile project-tile_shown';
		projectTile.children[1].setAttribute('tabindex', '0');
	}
};

const hideProjectTile = event => {
	const projectTile = event.target.children[1];

	if (projectTile.className.match('shown')) {
		projectTile.className = 'project-tile project-tile_hidden';
		projectTile.children[1].setAttribute('tabindex', '-1');
	}
};

projects.forEach(project => project.addEventListener('keydown', toggleProjectTileOnKeyDown));
projects.forEach(project => project.addEventListener('mouseenter', showProjectTile));
projects.forEach(project => project.addEventListener('mouseleave', hideProjectTile));
