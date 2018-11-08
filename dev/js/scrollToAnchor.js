const anchorElements = document.querySelectorAll('[href^="#"]');

function scrollToAnchor(event) {
  event.preventDefault();

  let speed = 1;
  let y = window.pageYOffset;
  let hash = this.href.replace(/[^#]*(.*)/, '$1');
  let indent = document.querySelector(hash).getBoundingClientRect().top;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }
    
    let progress = time - start;
    let scroll = null;

    if (indent < 0) {
      scroll = Math.max(y - progress/speed, y + indent);
    } else {
      scroll = Math.min(y + progress/speed, y + indent);
    }

    window.scrollTo(0, scroll);

    if (scroll !== y + indent) {
      requestAnimationFrame(step);
    } else {
      location.hash = hash;
    }
  }
}

anchorElements.forEach(anchorElement => anchorElement.addEventListener('click', scrollToAnchor));

