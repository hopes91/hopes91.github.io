// для IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const myName = document.querySelector('.index__my-name');
const language = document.querySelector('.index__language');
const nav = document.querySelector('.index__nav');
const contacts = document.querySelector('.index__contacts');
const copyright = document.querySelector('.index__photo-copyright');

const moveElements = () => {
  if (!myName) return;

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

  setTimeout(() => {
    copyright.style.opacity = '1';
  }, 2000);
}

window.addEventListener('load', moveElements);
