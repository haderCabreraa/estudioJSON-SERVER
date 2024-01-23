import { post } from "./../metodos/post.js";
import { delet } from "../metodos/delet.js";
import { put } from "../metodos/put.js";
import { patch } from "../metodos/patch.js";
import {get} from "../metodos/get.js";

export function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:3000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;
  switch (value) {
    case "Agregar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;

    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      get(url,datos);
      break;

    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      //formu.reset
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url);
      formu.reset;
      break;
    case "Añadir":
      url = URL + entidad + `/${datos.id}`;
      patch(url);
      formu.reset;
      break;
    case "addCompra":
      url = URL + "usuarios";
      console.log(datos)
      //AGREGAR USUARIO A  LA BASE DE DATOS
      const usuario = {
        "id": 1102381910,
        "pass": datos.id,
        "nombre": datos.name,
        "tipoId": "3" 
      }
      //post(url,usuario)
      //AGREGAR REGISTRO A LA BASE DE DATOS
      const producto = {
        "usuarioId": datos.id,
        "compras": [
          {
            "fecha": "date; yyyy-mm-dd",
            "perfumeId": "integer; id > 0"
          }
        ]
      }

      break;
  }
}