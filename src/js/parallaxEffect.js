const header = document.querySelector('header');

const handleParallaxEffect = event => {
  const container = document.querySelector('.parallax-effect');
  const triangle = document.querySelector('.triangle');
  const circle1 = document.querySelector('.circle1');
  const rectangle = document.querySelector('.rectangle');
  const circle2 = document.querySelector('.circle2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');

	let change;
	let left = change * 20;
	let xPos = event.clientX;
	let yPos = event.clientY;
	xPos = xPos * 2;
	yPos = yPos * 2;

  container.style.bottom = `${(0 + (yPos / 50))}px`;
  container.style.right = `${(0 + (xPos / 50))}px`;

  triangle.style.top = `${(0 - (yPos / 40))}px`;
  triangle.style.left = `${(0 - (xPos / 30))}px`;

  circle1.style.bottom = `${(0 + (yPos / 25))}px`;
  circle1.style.left = `${(0 - (xPos / 35))}px`;

  rectangle.style.top = `${(0 + (yPos / 20))}px`;
  rectangle.style.right = `${(0 + (xPos / 30))}px`;

  circle2.style.top = `${(0 - (yPos / 30))}px`;
  circle2.style.right = `${(0 + (xPos / 30))}px`;

  line1.style.bottom = `${(32 + (yPos / 50))}px`;
  line1.style.right = `${(128 + (xPos / 50))}px`;

  line1.style.bottom = `${(96 + (yPos / 50))}px`;
  line1.style.right = `${(32 + (xPos / 50))}px`;
};

header.addEventListener('mousemove', handleParallaxEffect);
