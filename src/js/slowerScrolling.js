const links = document.querySelectorAll('[href^="#"]');

function scrollTo(event) {
	event.preventDefault();

	const speed = 0.8;
	const y = window.pageYOffset;
	const hash = this.href.replace(/[^#]*(.*)/, '$1');
	const indent = document.querySelector(hash).getBoundingClientRect().top;
	let start = null;

	requestAnimationFrame(step);

	function step(time) {
		if (start === null) {
			start = time;
		}

		const progress = time - start;
		let scroll = null;

		indent < 0 ?
			scroll = Math.max(y - progress/speed, y + indent) :
			scroll = Math.min(y + progress/speed, y + indent);

		window.scrollTo(0, scroll);

		scroll !== y + indent ?
			requestAnimationFrame(step) :
			location.hash = hash;
	}
}

links.forEach(anchorElement => anchorElement.addEventListener('click', scrollTo));
