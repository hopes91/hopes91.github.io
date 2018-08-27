const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const nav = document.getElementById('nav');
const contacts = document.getElementById('contacts');
const stylingElement = document.querySelector('.styling-element');
const photoCopyright = document.querySelector('.photo-copyright');

function moveElements() {
	setTimeout(function() {
		siteName.style.left = '0';
	}, 1000);

	setTimeout(function() {
		nav.style.left = '0';
	}, 1500);

	setTimeout(function() {
		contacts.style.bottom = '0';
		languages.style.top = '0';
	}, 2000);

	setTimeout(function() {
		stylingElement.style.opacity = '1';
		photoCopyright.style.opacity = '1';
	}, 4000);
}

window.addEventListener('load', moveElements);

