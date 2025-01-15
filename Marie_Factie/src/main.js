//importamos la funcion renderHeader de nuestro archivo header.js
import { renderHeader } from "./header.js";
//import { renderGame } from "./game.js";
//import { renderFavorit } from "./favorit.js";


//route indica a que seccion de la app queremos navegar en la funcion
function navigate(route) {
  //buscamos elemento app en el DOM
  const app = document.getElementById("app");
  //si encuentras app
  if (app) {
    //limpio el contenido para reutilizar app
  app.innerHTML = "";
  switch (route) {
  //  case "game":
    //  renderGame(app);
      //break;
    //case "favorites":
      //renderFavorit(app);
      //break;
    default:
      renderHeader(app);
  }
  //si no dame un error en la consola
} else {
  console.error("Elemento #app no encontrado");
}
}

navigate("header");


