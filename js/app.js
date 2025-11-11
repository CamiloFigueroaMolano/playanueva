$(document).ready(function () {
    // Cargar navbar y otras secciones
    $("#navbar-placeholder").load("./html/navbar.html");
    $("#mainImage-placeholder").load("./html/mainImage.html");
    $("#informacion-placeholder").load("./html/informacion.html");
    $("#servicios-placeholder").load("./html/servicios.html");
    $("#testimonios-placeholder").load("./html/testimonio.html");
    $("#horarios-placeholder").load("./html/horarios.html");
    $("#ubicacion-placeholder").load("./html/ubicacion.html");
    $("#contactanos-placeholder").load("./html/contactanos.html");
    $("#acreditacion-placeholder").load("./html/acreditacion.html");
    $("#footer-placeholder").load("./html/footer.html");

    // Función para animar el botón de WhatsApp
    function animateButton() {
      $("#whatsapp-button").animate({ right: "30px" }, 500, function () {
        $("#whatsapp-button").animate({ right: "20px" }, 500);
      });
    }

    // Animar el botón de WhatsApp cada 5 segundos
    setInterval(animateButton, 5000);

    // Mostrar el modal después de 45 segundos
    setTimeout(function () {
      $("#contactModal").modal("show");
    }, 45000); // 45000 ms = 45 segundos

    // Añadir evento de clic al botón en la navbar
    $("#navbar-placeholder").on("click", "#clickHere", function () {
      $("#contactModal").modal("show");
    });

    // Desplazamiento suave al hacer clic en un enlace del navbar
    $("#navbar-placeholder").on("click", "a.nav-link", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });

    // Detectar clic en el botón externo y abrir el modal
    $(document).on("click", "#agendaCitaBtn", function (event) {
      event.preventDefault();
      $("#contactModal").modal("show");
    });
  });

  // Manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then(() => {
        $("#contactModal").modal("hide");
        $("#successModal").modal("show");
        setTimeout(() => {
          $("#successModal").modal("hide");
          window.location.href = "/";
        }, 5000); // 5000 ms = 5 segundos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }