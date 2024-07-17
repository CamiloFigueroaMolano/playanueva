let menuToogle = document.querySelector(".menu-toogle");
let menu = document.getElementById("menu");

menuToogle.addEventListener("click", (e) => {
    menu.classList.toggle("mostrar");
});