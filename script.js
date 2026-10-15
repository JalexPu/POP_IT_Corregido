const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".header__link");

// // Evento para la interacción del menú
burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("header__nav--active");
  burger.setAttribute("aria-expanded", isOpen);
});

// // Cierra el menú cuando se selecciona un enlace
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("header__nav--active");
    burger.setAttribute("aria-expanded", "false");
  });
});
