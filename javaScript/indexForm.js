"use strict";

window.addEventListener("load", function () {
  // const aparecer = document.querySelector(".desab")
  // Mostrar el modal cuando se haga clic en el botón "Mostrar Modal"
  document
    .querySelector(".mostrarModal")
    .addEventListener("click", function () {
      document.getElementById("miModal").style.display = "block";
      // document.querySelector(".desab").style.display = "none";
    });

  // Cerrar el modal cuando se haga clic en la "X"
  document.getElementById("cerrarModal").addEventListener("click", function () {
    document.getElementById("miModal").style.display = "none";
    // aparecer.style.display =
    // "inline-flex";
  });

  // Cerrar el modal si se hace clic en el fondo semitransparente
  document.querySelector(".modal").addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("miModal").style.display = "none";
      // aparecer.style.display =
      // "inline-flex";
    }
  });

  document.querySelector("#mobileButon").addEventListener("click", function () {
    document.getElementById("miModal").style.display = "block";
    // document.querySelector(".desab").style.display = "none";
  });

  // Cerrar el modal cuando se haga clic en la "X"
  document.getElementById("cerrarModal").addEventListener("click", function () {
    document.getElementById("miModal").style.display = "none";
    // aparecer.style.display =
    // "inline-flex";
  });

  // Cerrar el modal si se hace clic en el fondo semitransparente
  document.querySelector(".modal").addEventListener("click", function (event) {
    if (event.target === this) {
      document.getElementById("miModal").style.display = "none";
      // aparecer.style.display =
      // "inline-flex";
    }
  });
});
