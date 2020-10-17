// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const projects = document.querySelectorAll('.projects .project');

const toggleProjectTileOnKeyDown = event => {
	const projectTile = event.target.children[1];

	if (event.key === 'Enter') {
		projectTile.style.display === 'block' ?
			hideProjectTile(projectTile):
			showProjectTile(projectTile);
	}
};

const showProjectTile = projectTile => {
	if (projectTile.style.display !== 'block') {
		projectTile.style.display = 'block';
		projectTile.querySelector('a').setAttribute('tabindex', '0');
	}
};

const hideProjectTile = projectTile => {
	if (projectTile.style.display === 'block') {
		projectTile.style.display = 'none';
		projectTile.querySelector('a').setAttribute('tabindex', '-1');
	}
};

projects.forEach(project => project.addEventListener('keydown', toggleProjectTileOnKeyDown));
