const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-item");
const portfolioMenu = document.querySelector(".portfolio-menu");
const aboutMenu = document.querySelector(".about-menu");
const contactMenu = document.querySelector(".contact-menu");

menu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", hideMenu);
portfolioMenu.addEventListener("click", hideMenu);
aboutMenu.addEventListener("click", hideMenu);
contactMenu.addEventListener("click", hideMenu);

function showMenu(e) {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = "flex";
}

function hideMenu(e) {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display = "none";
}
