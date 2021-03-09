const header = document.querySelector('header');

const handleParallaxEffect = event => {
  const wrapperBig = document.querySelector('.wrapper-rectangle-big');
  const wrapperSmall = document.querySelector('.wrapper-rectangle-small');
  const triangle = document.querySelector('.triangle');
  const circle1 = document.querySelector('.circle1');
  const rectangle = document.querySelector('.rectangle');
  const circle2 = document.querySelector('.circle2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');

	let change;
	let left = change * 20;
	let cursorXPosition = event.clientX * 2;
	let cursorYPosition = event.clientY * 2;

  wrapperBig.style.top = `${(0 + (cursorYPosition / 70))}px`;
  wrapperBig.style.left = `${(0 + (cursorXPosition / 70))}px`;

  wrapperSmall.style.bottom = `${(0 + (cursorYPosition / 50))}px`;
  wrapperSmall.style.right = `${(0 + (cursorXPosition / 50))}px`;

  triangle.style.top = `${(0 - (cursorYPosition / 40))}px`;
  triangle.style.left = `${(0 - (cursorXPosition / 30))}px`;

  circle1.style.bottom = `${(0 + (cursorYPosition / 25))}px`;
  circle1.style.left = `${(0 - (cursorXPosition / 35))}px`;

  rectangle.style.top = `${(0 + (cursorYPosition / 20))}px`;
  rectangle.style.right = `${(0 + (cursorXPosition / 30))}px`;

  circle2.style.top = `${(0 - (cursorYPosition / 30))}px`;
  circle2.style.right = `${(0 + (cursorXPosition / 30))}px`;

  line1.style.bottom = `${(32 + (cursorYPosition / 50))}px`;
  line1.style.right = `${(128 + (cursorXPosition / 50))}px`;

  line2.style.bottom = `${(96 + (cursorYPosition / 50))}px`;
  line2.style.right = `${(32 + (cursorXPosition / 50))}px`;
};

header.addEventListener('mousemove', handleParallaxEffect);
