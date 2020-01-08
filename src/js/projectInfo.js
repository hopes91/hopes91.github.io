const projectsButtons = document.querySelectorAll('.project-tile-button');

const openProjectInfoOnKeyDown = event => {
  event.key === 'Enter' &&
    openProjectInfo(event);
};

const openProjectInfo = event => {
  const projectClass = event.target.parentElement.parentElement.className;
  const windowBack = document.querySelector('.popup-window-back');
  const projectInfo = document.querySelectorAll('.project-info');

  projectInfo.forEach(info => {
    if (info.className.match(projectClass)) {
      windowBack.style.display = 'block';
      info.style.display = 'block';
    }
  });
};

projectsButtons.forEach(button => button.addEventListener('keydown', openProjectInfoOnKeyDown));
projectsButtons.forEach(button => button.addEventListener('click', openProjectInfo));
