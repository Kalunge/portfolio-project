const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-item');
const portfolioMenus = document.querySelector('.portfolio-menu');

const showMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'flex';
};

const hideMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
};

menu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
portfolioMenus.forEach((element) => {
  element.addEventListener('click', hideMenu);
});
