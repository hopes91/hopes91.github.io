let navBar = document.querySelectorAll('#nav');
let backDiv = document.getElementById('back');
let aboutSection = document.getElementById('about');
let portfolioSection = document.getElementById('portfolio');

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
