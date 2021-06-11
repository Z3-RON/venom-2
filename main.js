const menuButton = document.querySelector(".menu")
const menu = document.querySelector(".nav__menu")
const menuClose = document.querySelector(".menu__close")

menuButton.addEventListener("click", () => {
    menu.classList.add("is__active");
    menuClose.classList.add("is__active");

});

menuClose.addEventListener("click", () => {
    menu.classList.remove("is__active");
    menuClose.classList.remove("is__active");
});