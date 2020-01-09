const projectsButtons = document.querySelectorAll('.project-tile-button');
const windowBack = document.querySelector('.popup-window-back');
const closeIcon = document.querySelector('.close-icon');
const projectInfo = document.querySelectorAll('.project-info');

const openProjectInfoOnKeyDown = event => {
  event.key === 'Enter' &&
    openProjectInfo(event);
};

const openProjectInfo = event => {
  const projectClass = event.target.parentElement.parentElement.classList[1];

  projectInfo.forEach(info => {
    if (info.classList[1].match(projectClass)) {
      windowBack.style.display = 'block';
      info.style.display = 'block';
    }
  });
};

const closeProjectInfoOnKeyDown = event => {
  event.key === 'Escape' &&
    closeProjectInfo();
};

const closeProjectInfo = () => {
  projectInfo.forEach(info => info.style.display = 'none');
  windowBack.style.display = 'none';
};

projectsButtons.forEach(button => button.addEventListener('keydown', openProjectInfoOnKeyDown));
projectsButtons.forEach(button => button.addEventListener('click', openProjectInfo));
window.addEventListener('keydown', closeProjectInfoOnKeyDown);
closeIcon.addEventListener('click', closeProjectInfo);
