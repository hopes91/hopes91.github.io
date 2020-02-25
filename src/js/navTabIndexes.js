// const nav = document.querySelector('nav');
// const portfolioLink = document.querySelector('.nav-anchor.portfolio');
// const contactsLink = document.querySelector('.nav-anchor.contacts');
//
// const isNavFocused = () => {
//   return document.activeElement === nav ||
//          document.activeElement === portfolioLink ||
//          document.activeElement === contactsLink;
// };
//
// const navigateMenu = event => {
//   console.log(isNavFocused());
//   if (isNavFocused()) {
//     if (event.key === 'ArrowLeft') {
//       console.log(event.key);
//       contactsLink.blur();
//       portfolioLink.focus();
//     }
//
//     if (event.key === 'ArrowRight') {
//       console.log(event.key);
//       portfolioLink.blur();
//       contactsLink.focus();
//     }
//   }
// };
//
// if (nav) {
//   window.addEventListener('keydown', navigateMenu);
// }
