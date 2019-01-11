// для IE
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

let siteName = document.getElementById('name');
let languages = document.getElementById('languages');
let nav = document.getElementById('nav');
let contacts = document.getElementById('contacts');
let copyright = document.querySelector('.photo-copyright');

const moveElements = () => {
  if (siteName) {
    setTimeout(() => {
      siteName.style.left = '0';
    }, 0);

    setTimeout(() => {
      nav.style.left = '0';
    }, 500);

    setTimeout(() => {
      contacts.style.right = '0';
      languages.style.top = '0';
    }, 1000);

    setTimeout(() => {
      copyright.style.opacity = '1';
    }, 2000);
  }
}

window.addEventListener('load', moveElements);
