// start for IE
const forEach = require('./forIE/forEach.js');

forEach();
// end for IE

const burger = document.querySelector('.burger');

const toggleBurgerTabIndex = () => {
	window.innerWidth <= 640 ?
		burger.setAttribute('tabindex', '0') :
	  burger.setAttribute('tabindex', '-1');
};

const toggleBurgerOnKeyDown = event => {
	event.key === 'Enter' &&
    toggleBurger(event);
};

const toggleBurger = event => {
	const dropMenu = event.currentTarget.nextElementSibling;

  dropMenu.style.display !== 'block' ?
    burger.className = 'burger burger_active' :
    burger.className = 'burger';

  toggleDropMenu(dropMenu);
};

const toggleDropMenu = dropMenu => {
	dropMenu.style.display !== 'block' ?
		dropMenu.style.display = 'block' :
	  dropMenu.style.display = 'none';
};

window.addEventListener('load', toggleBurgerTabIndex);
window.addEventListener('resize', toggleBurgerTabIndex);
burger.addEventListener('keydown', toggleBurgerOnKeyDown);
burger.addEventListener('click', toggleBurger);
