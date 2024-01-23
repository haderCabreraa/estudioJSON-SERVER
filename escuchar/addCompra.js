import { controlador } from "../controlador/controlador.js";

const formul = document.querySelector("form");
formul.addEventListener("click", (e) => {
  e.preventDefault();
  controlador(formul, e, "addCompra");
  e.stopPropagation();
});
