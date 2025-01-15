import './style.css' 
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
 <section id="start" style="display: flex; flex-direction: row;">
    <div>
        <img src="imagen1.png">
    </div>
    <div style="display: flex; flex-direction: column; ">
        <p>
            Explora hechos interesantes sobre el mundo, la ciencia, la historia y mucho más con solo un clic.
        </p>
        <p>Guarda tus favoritos para volver a ellos cuando quieras.</p>
        <button id="buttonStart">Play</button>
    </div>
</section>
<section id="newFact" style="display: flex; flex-direction: row;"> 
    <div style="display: flex; flex-direction: column ">
         <div>
            <!--  POPUP --->
         </div>
         <div style="display: flex; height: 76px; width: 211px; background-color: #DDE35F; align-items: center; justify-content: center;">
            <p id="dataCountries">Dato Curioso</p>
         </div>
         <div style="display: flex; flex-direction: row;">
            <button> add to Favorites</button>
            <button> Favorites</button>
            <button id="buttonRefresh"> 🔁</button>
         </div>
    </div>
    <div>
        <img src="imagen2.png">
    </div>
</section>
<section id="favorites" style="display: flex; flex-direction: column ;">
    <div id="list-favorites" style="display: flex; flex-direction: row; gap: 20px">
        <div style="display: flex; height: 200px; width: 76px; background-color: #DDE35F; align-items: center; justify-content: center;">
            Dato Curioso
        </div>
          <div style="display: flex; height: 200px; width: 76px; background-color: #DDE35F; align-items: center; justify-content: center;">
            Dato Curioso
        </div>  <div style="display: flex; height: 200px; width: 76px; background-color: #DDE35F; align-items: center; justify-content: center;">
            Dato Curioso
        </div>  <div style="display: flex; height: 200px; width: 76px; background-color: #DDE35F; align-items: center; justify-content: center;">
            Dato Curioso
        </div>  <div style="display: flex; height: 200px; width: 76px; background-color: #DDE35F; align-items: center; justify-content: center;">
            Dato Curioso
        </div>
    </div>
    <div>
        <div>
            <img src="imagen3.png">
        </div>
        <div style="display: flex; flex-direction: column; ">
            <div style="display: flex; height: 76px; width: 211px; background-color: DDE35F; align-items: center;">
                <p id="dataCountries">Dato Curioso</p>
             </div> 
            <button >Play again</button>
        </div>
    </div>

</section>
`

setupCounter(document.querySelector('#counter'))


