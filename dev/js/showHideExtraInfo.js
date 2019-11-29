const navLinks = document.querySelectorAll('nav li');
const back = document.querySelector('.back');
const closeBackIcon = document.querySelector('.close-back-icon');
const portfolioSection = document.querySelector('.portfolio');
const aboutSection = document.querySelector('.about');

const handleProjectsTabIndexes = isOpen => {
  const projects = document.querySelectorAll('.project');

  isOpen ?
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

  handleProjectsTabIndexes(true);

  event.target.className.match('portfolio') ?
    (aboutSection.style.display = 'none', portfolioSection.style.display = 'block') :
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

  handleProjectsTabIndexes(false);
}

navLinks.forEach(link => link.addEventListener('keydown', showInfoOnKeyDown));
navLinks.forEach(link => link.addEventListener('click', showInfo));
closeBackIcon.addEventListener('keydown', hideInfoOnEnterPress);
closeBackIcon.addEventListener('click', hideInfo);
window.addEventListener('keydown', hideInfoOnEscapePress);
