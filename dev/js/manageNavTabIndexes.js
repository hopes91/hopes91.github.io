const nav = document.querySelector('nav');
const portfolioLink = document.querySelector('.nav-portfolio');
const aboutLink = document.querySelector('.nav-about');

const isNavFocused = () => {
  return document.activeElement === nav ||
         document.activeElement === portfolioLink ||
         document.activeElement === aboutLink;
}

const navigateMenu = event => {
  if (isNavFocused()) {
    event.key === 'ArrowUp' &&
      (aboutLink.blur(), portfolioLink.focus());
    event.key === 'ArrowDown' &&
      (portfolioLink.blur(), aboutLink.focus());
  }
}

window.addEventListener('keydown', navigateMenu);
