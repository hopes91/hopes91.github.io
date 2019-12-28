// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const nav = document.querySelector('nav');
const portfolioLink = document.querySelector('.nav-anchor.portfolio');
const contactsLink = document.querySelector('.nav-anchor.contacts');

const isNavFocused = () => {
  return document.activeElement === nav ||
         document.activeElement === portfolioLink ||
         document.activeElement === contactsLink;
};

const navigateMenu = event => {
  if (isNavFocused()) {
    if (event.key === 'ArrowLeft') {
      contactsLink.blur();
      portfolioLink.focus();
    }

    if (event.key === 'ArrowRight') {
      portfolioLink.blur();
      contactsLink.focus();
    }
  }
};

window.addEventListener('keydown', navigateMenu);
