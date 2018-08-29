const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const contacts = document.getElementById('contacts');
const photoCopyright = document.querySelector('.photo-copyright');

function moveElements() {
	setTimeout(function() {
		siteName.style.left = '0';
	}, 0);

	setTimeout(function() {
		contacts.style.bottom = '0';
		languages.style.top = '0';
	}, 500);

	setTimeout(function() {
		photoCopyright.style.opacity = '1';
	}, 1000);
}

window.addEventListener('load', moveElements);

