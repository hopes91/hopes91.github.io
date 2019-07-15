// const forEach = require('./forIE/forEach.js');

const moveElements = () => {
  const myName = document.querySelector('.my-name');
  const language = document.querySelector('.language');
  const nav = document.querySelector('.nav');
  const contacts = document.querySelector('.contacts');

  setTimeout(() => {
    myName.style.left = '0';
  }, 0);

  setTimeout(() => {
    nav.style.left = '0';
  }, 500);

  setTimeout(() => {
    contacts.style.right = '0';
    language.style.top = '0';
  }, 1000);
}

window.addEventListener('load', moveElements);
