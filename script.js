const arrow = document.getElementById('arrow-down');
const content = document.getElementById('content');

const scrollDown = (event) => {
	const v = 1.2;
	event.preventDefault();
	const w = window.pageYOffset;
	const t = content.getBoundingClientRect().top;
	let start = null;
	requestAnimationFrame(step);

	function step(time) {
		if(start === null) {
			start = time;
		}
		
		const progress = time - start;
		r = t < 0 ? Math.max(w - progress/v, w + t) : Math.min(w + progress/v, w + t);
		window.scrollTo(0, r);

		if(r != w + t) {
			requestAnimationFrame(step);
		} else {
			location.content = content;
		}
	}
}

arrow.addEventListener('click', scrollDown);