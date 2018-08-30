const anchorElements = document.querySelectorAll('[href^="#"]');

function scrollToAnchor(event) {
	event.preventDefault();

	let speed = 1; // scrolling speed
	let y = window.pageYOffset;
	let hash = this.href.replace(/[^#]*(.*)/, '$1'); // the id of the element
	let indent = document.querySelector(hash).getBoundingClientRect().top; // the indent from the top of the browser's window to the id
	let start = null;

	requestAnimationFrame(step);

	function step(time) {
		if (start === null) start = time;
		
		let progress = time - start;
		let scroll = (indent < 0 ? Math.max(y - progress/speed, y + indent) : Math.min(y + progress/speed, y + indent));

		window.scrollTo(0, scroll);

		if (scroll !== y + indent) requestAnimationFrame(step);
		else location.hash = hash;
	}
}

anchorElements.forEach(anchorElement => anchorElement.addEventListener('click', scrollToAnchor));

