// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const projectsHandlers = document.querySelectorAll('.projects-handler h3');

const toggleProjectsOriginOnKeyDown = event => {
	if (event.key === 'Enter') {
		toggleProjectsOrigin(event);
  }
};

const toggleProjectsOrigin = event => {
  const withCodeOrigin = document.querySelector('#projects-with-code');
  const withCodeProjects = withCodeOrigin.querySelectorAll('.project');
  const withCodeLinks = withCodeOrigin.querySelectorAll('a');
  const withTildaOrigin = document.querySelector('#projects-with-Tilda');
  const withTildaProjects = withTildaOrigin.querySelectorAll('.project');
  const withTildaLinks = withTildaOrigin.querySelectorAll('a');

	if (event.target.className === 'with-code') {
    withTildaOrigin.style.display = 'none';
    withTildaProjects.forEach(project => project.setAttribute('tabindex', '-1'));
    withTildaLinks.forEach(link => link.setAttribute('tabindex', '-1'));
		withCodeOrigin.style.display = 'flex';
    withCodeProjects.forEach(project => project.setAttribute('tabindex', '0'));
    withCodeLinks.forEach(link => link.setAttribute('tabindex', '0'));
	} else {
    withCodeOrigin.style.display = 'none';
    withCodeProjects.forEach(project => project.setAttribute('tabindex', '-1'));
    withCodeLinks.forEach(link => link.setAttribute('tabindex', '-1'));
    withTildaOrigin.style.display = 'flex';
    withTildaProjects.forEach(project => project.setAttribute('tabindex', '0'));
    withTildaLinks.forEach(link => link.setAttribute('tabindex', '0'));
  }
};

projectsHandlers.forEach(project => project.addEventListener('keydown', toggleProjectsOriginOnKeyDown));
projectsHandlers.forEach(project => project.addEventListener('click', toggleProjectsOrigin));
