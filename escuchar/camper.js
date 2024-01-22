import { controlador } from "./../controlador/controlador.js";

const formu = document.querySelector("form");

formu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("ESTOY LEYENDO EL CLICK DE FORM")
  controlador(formu, e, "campers");
  e.stopPropagation();
});