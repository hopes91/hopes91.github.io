const siteName = document.getElementById('name');
const languages = document.getElementById('languages');
const contacts = document.getElementById('contacts');

function moveElements() {
	setTimeout(function() {
		siteName.style.left = '0';
	}, 0);

	setTimeout(function() {
		nav.style.left = '0';
	}, 500);

	setTimeout(function() {
		contacts.style.right = '0';
		languages.style.top = '0';
	}, 1000);
}

window.addEventListener('load', moveElements);

