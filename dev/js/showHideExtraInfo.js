const navLinks = document.querySelectorAll('.index__nav li');
const back = document.querySelector('.index__back');
const closeBackIcon = document.querySelector('.index__back-close');
const portfolioSection = document.querySelector('.index__back-portfolio');
const aboutMeSection = document.querySelector('.index__back-about');

const showInfoOnKeyDown = event => {
  if (event.key !== 'Enter') return;

  showInfo(event);
}

const showInfo = event => {
  back.style.display = 'block';
  closeBackIcon.setAttribute('tabindex', '0');

  if (event.target.className.match('portfolio')) {
    portfolioSection.style.display = 'block';
    aboutMeSection.style.display = 'none';
  } else {
    portfolioSection.style.display = 'none';
    aboutMeSection.style.display = 'block';
  }
}

const hideInfoOnEnterPress = event => {
  if (event.key === 'Enter') {
    hideInfo();
  }
}

const hideInfoOnEscapePress = event => {
  if (event.key === 'Escape') {
    hideInfo();
  }
}

const hideInfo = () => {
  closeBackIcon.setAttribute('tabindex', '-1');
  portfolioSection.style.display = 'none';
  aboutMeSection.style.display = 'none';
  back.style.display = 'none';
}

if (back) {
  navLinks.forEach(link => link.addEventListener('click', showInfo));
  navLinks.forEach(link => link.addEventListener('keydown', showInfoOnKeyDown));
  closeBackIcon.addEventListener('click', hideInfo);
  closeBackIcon.addEventListener('keydown', hideInfoOnEnterPress);
  window.addEventListener('keydown', hideInfoOnEscapePress);
}
