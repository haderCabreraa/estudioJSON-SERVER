import { controlador } from "../controlador/controlador.js";

const formu = document.querySelector("form");
formu.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formu, e, "usuarios");
  e.stopPropagation();
});
