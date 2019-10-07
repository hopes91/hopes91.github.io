const navLinks = document.querySelectorAll('.nav li');
const back = document.querySelector('.back');
const closeBackIcon = document.querySelector('.back__close-icon');
const portfolioSection = document.querySelector('.portfolio');
const aboutSection = document.querySelector('.about');

const handleProjectsTabIndexes = () => {
  const projects = document.querySelectorAll('.portfolio__project');

  back.style.display === 'block' ?
    projects.forEach(project => project.setAttribute('tabindex', '0')) :
    projects.forEach(project => project.setAttribute('tabindex', '-1'));
}

const showInfoOnKeyDown = event => {
  event.key === 'Enter' &&
    showInfo(event);
}

const showInfo = event => {
  back.style.display = 'block';
  closeBackIcon.setAttribute('tabindex', '0');

  handleProjectsTabIndexes();

  event.target.className.match('portfolio') ?
    (portfolioSection.style.display = 'block', aboutSection.style.display = 'none') :
    (portfolioSection.style.display = 'none', aboutSection.style.display = 'block');
}

const hideInfoOnEnterPress = event => {
  event.key === 'Enter' &&
    hideInfo();
}

const hideInfoOnEscapePress = event => {
  event.key === 'Escape' &&
    hideInfo();
}

const hideInfo = () => {
  back.style.display = 'none';
  portfolioSection.style.display = 'none';
  aboutSection.style.display = 'none';
  closeBackIcon.setAttribute('tabindex', '-1');

  handleProjectsTabIndexes();
}

navLinks.forEach(link => link.addEventListener('click', showInfo));
navLinks.forEach(link => link.addEventListener('keydown', showInfoOnKeyDown));
closeBackIcon.addEventListener('click', hideInfo);
closeBackIcon.addEventListener('keydown', hideInfoOnEnterPress);
window.addEventListener('keydown', hideInfoOnEscapePress);
