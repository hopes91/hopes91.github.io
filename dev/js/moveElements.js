const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const navLinks = document.querySelector('#nav');
const contacts = document.getElementById('contacts');
const stylingElement = document.querySelector('.styling-element');
const photoCopyright = document.querySelector('.photo-copyright');

function moveElements() {
	setTimeout(function() {
		siteName.style.left = '0';
	}, 0);

	setTimeout(function() {
		navLinks.style.left = '0';
	}, 500);
	// setTimeout(function() {
	// 	stylingElement.style.opacity = '1';
	// }, 0);
	// setTimeout(function() {
	// 	photoCopyright.style.opacity = '1';
	// }, 0);
}

window.addEventListener('load', moveElements);

