const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const nav = document.getElementById('nav');
const contacts = document.getElementById('contacts');
const stylingElement = document.querySelector('.styling-element');
const photoCopyright = document.querySelector('.photo-copyright');

function moveElements() {
	setTimeout(function() {
		siteName.style.left = '0';
	}, 0);
	setTimeout(function() {
		languages.style.right = '0';
	}, 0);

	setTimeout(function() {
		nav.style.left = '0';
	}, 500);

	setTimeout(function() {
		contacts.style.left = '0';
	}, 1000);

	setTimeout(function() {
		stylingElement.style.opacity = '1';
	}, 1500);
	setTimeout(function() {
		photoCopyright.style.opacity = '1';
	}, 1500);
}

window.addEventListener('load', moveElements);

