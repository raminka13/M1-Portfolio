const mobMenu = document.querySelector(".mobile-menu");
const overlayMenu = document.querySelector(".navlinks");
const closeB = document.querySelector(".mobile-menu-close");

mobMenu.addEventListener("click", () => {
  mobMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
}) 