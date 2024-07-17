document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-menu");
  const menu = document.querySelector(".menu");
  const contenido = document.querySelector(".contenido");

  toggleButton.addEventListener("click", function () {
    if (menu.style.left === "-250px") {
      menu.style.left = "0";
      contenido.style.marginLeft = "250px";
      toggleButton.innerText = "Cerrar Menú";
    } else {
      menu.style.left = "-250px";
      contenido.style.marginLeft = "0";
      toggleButton.innerText = "Abrir Menú";
    }
  });
});
