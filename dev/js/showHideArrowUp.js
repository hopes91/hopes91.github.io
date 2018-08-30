const arrowUp = document.getElementById('arrow-up');

function showHideArrowUp() {
	if (window.pageYOffset > window.innerHeight / 4) arrowUp.style.opacity = '1';
	else if (window.pageYOffset === 0) arrowUp.style.opacity = '0';
}

window.addEventListener('scroll', showHideArrowUp);

