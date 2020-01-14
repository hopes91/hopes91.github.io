const showHideArrowUp = () => {
	const arrowUp = document.querySelector('.arrow-up');

	if (window.pageYOffset > window.innerHeight / 4) {
		arrowUp.style.display = 'inline-block';
    arrowUp.setAttribute('tabindex', '0');
	}

	if (window.pageYOffset === 0) {
		arrowUp.style.display = 'none';
    arrowUp.setAttribute('tabindex', '-1');
	}
};

window.addEventListener('scroll', showHideArrowUp);
