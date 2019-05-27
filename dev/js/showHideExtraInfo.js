const navBar = document.querySelectorAll('#nav');
const backDiv = document.getElementById('back');
const closeBackIcon = document.getElementById('back-close');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');

const showInfoOnKeyDown = event => {
  if (event.key === 'Enter') {
    showInfo(event);
  }
}

const showInfo = event => {
  if (backDiv) {
    backDiv.style.display = 'block';
    closeBackIcon.setAttribute('tabindex', '0');

    if (event.target.className === 'about') {
      portfolioSection.style.display = 'none';
      aboutSection.style.display = 'block';
    } else {
      aboutSection.style.display = 'none';
      portfolioSection.style.display = 'block';
    }
  }
}

const hideInfoOnKeyDown = event => {
  if (event.key === 'Enter') {
    hideInfo();
  }
}

const hideInfo = () => {
  closeBackIcon.setAttribute('tabindex', '-1');
  aboutSection.style.display = 'none';
  portfolioSection.style.display = 'none';
  backDiv.style.display = 'none';
}

navBar.forEach(link => link.addEventListener('click', showInfo));
navBar.forEach(link => link.addEventListener('keydown', showInfoOnKeyDown));
