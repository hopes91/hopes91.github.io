const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const nav = document.getElementById('nav');
const contacts = document.getElementById('contacts');
const copyright = document.querySelector('.photo-copyright');

function moveElements() {
  setTimeout(function() {
    siteName.style.left = '0';
  }, 0);

  setTimeout(function() {
    nav.style.left = '0';
  }, 500);

  setTimeout(function() {
    contacts.style.left = '0';
    languages.style.top = '0';
  }, 1000);

  setTimeout(function() {
    copyright.style.opacity = '1';
  }, 2000);
}

window.addEventListener('load', moveElements);

