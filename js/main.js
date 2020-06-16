const toggleMenu = () => {
  const menuEl = document.querySelector('.menu');
  const menuToggEl = document.querySelector('.menu-toggler');
  const togglerIconEl = document.querySelector('#toggle-icon');

  menuEl.classList.toggle('open');
  menuToggEl.classList.toggle('open');

  menuEl.classList.contains('open')
    ? togglerIconEl.setAttribute('name', 'close-outline')
    : togglerIconEl.setAttribute('name', 'reorder-three-outline');

  const menuLiEl = document
    .querySelector('.menu-li')
    .getElementsByTagName('li');
  for (let i = 0; i < menuLiEl.length; i++) {
    const element = menuLiEl[i];
    setTimeout(() => {
      element.classList.toggle('open');
    }, i * 50);
  }
};

// const clickLink = () => {
//   const menuEl = document.querySelector('.menu');
//   const menuToggEl = document.querySelector('.menu-toggler');

//   menuEl.classList.toggle('open');
//   menuToggEl.classList.toggle('open');

//   const menuLiEl = document.querySelector('.menu-li').getElementsByTagName('li');
//   for (let i = 0; i < menuLiEl.length; i++) {
//     const element = menuLiEl[i];
//     setTimeout(() => {
//       element.classList.toggle('open');
//     }, i * 500);
//   }
// };
