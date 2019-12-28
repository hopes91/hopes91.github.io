// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const burger = document.querySelector('.burger');
const navTop = document.querySelector('.nav-top');

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
  navTop.style.display !== 'block' ?
    burger.className = 'burger burger_active' :
    burger.className = 'burger';

  toggleDropdownMenu();
};

const toggleDropdownMenu = () => {
	navTop.style.display !== 'block' ?
		navTop.style.display = 'block' :
	  navTop.style.display = 'none';
};

window.addEventListener('resize', toggleBurgerTabIndex);
burger.addEventListener('keydown', toggleBurgerOnKeyDown);
burger.addEventListener('click', toggleBurger);
