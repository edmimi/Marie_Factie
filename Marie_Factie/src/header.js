export function renderHeader(container) {
    //el parametro de entrada que representa el elemento que se insertara
    container.innerHTML = `
    <section class="header">
    <p>Explora un mundo rico y grande de datos curiosos, con nuestra gran cientifica <b>Marie Factorie</b> 
    , apenas puedes hacerte una idea de la gran suerte que tienes.</p>
    <img src="./assets/imagenesMarieFactorie/marieFeliz.png" alt="Marie Factori encantada con tu visita a la Web">
    <button id = "butonStart">Star</button>
    </section>
    `;
    document
      .getElementById('butonStart')
      .addEventListener("click", (event) => {
        event.preventDefault();
        navigate("game");
    })
    }
  

  