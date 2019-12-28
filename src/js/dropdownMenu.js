// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

const toggleBurgerTabIndex = () => {
	window.innerWidth <= 640 ?
		burger.setAttribute('tabindex', '0') :
	  burger.setAttribute('tabindex', '-1');
};

const toggleBurgerOnKeyDown = event => {
	event.key === 'Enter' &&
    toggleBurger();
};

const toggleBurger = () => {
  nav.style.display !== 'block' ?
    burger.className = 'burger burger_active' :
    burger.className = 'burger';

  toggleDropdownMenu();
};

const toggleDropdownMenu = () => {
	nav.style.display !== 'block' ?
		nav.style.display = 'block' :
	  nav.style.display = 'none';
};

window.addEventListener('resize', toggleBurgerTabIndex);
burger.addEventListener('keydown', toggleBurgerOnKeyDown);
burger.addEventListener('click', toggleBurger);
