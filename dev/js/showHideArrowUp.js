const showHideArrowUp = () => {
  const arrowUp = document.querySelector('.project__arrow_up');

  if (arrowUp) {
    if (window.pageYOffset > window.innerHeight / 4) {
      arrowUp.style.display = 'inline-block';
    } else if (window.pageYOffset <= 100) {
      arrowUp.style.display = 'none';
    }
  }
}

window.addEventListener('scroll', showHideArrowUp);
