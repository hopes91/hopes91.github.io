const navBar = document.querySelectorAll('#nav');
const backDiv = document.getElementById('back');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');

const showInfo = event => {
  if (backDiv) {
    backDiv.style.display = 'block';

    if (event.target.className === 'about') {
      portfolioSection.style.display = 'none';
      aboutSection.style.display = 'block';
    } else {
      aboutSection.style.display = 'none';
      portfolioSection.style.display = 'block';
    }
  }
}

const hideInfo = () => {
  aboutSection.style.display = 'none';
  portfolioSection.style.display = 'none';
  backDiv.style.display = 'none';
}

navBar.forEach(link => link.addEventListener('click', showInfo));
