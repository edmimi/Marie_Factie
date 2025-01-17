import './style.css' 



document.querySelector('#app').innerHTML = `
 <section id="start" class="start-section">
    <div>
        <img src="marieFactieimg.png" alt="Marie Factie image">
    </div>
    <div class="column">
        <p>
            Explora hechos interesantes sobre el mundo, la ciencia, la historia y mucho más con solo un clic.
        </p>
        <p>Guarda tus favoritos para volver a ellos cuando quieras.</p>
        <button id="buttonStart">Play</button>
    </div>
</section>
<section id="newFact" class="new-fact-section hidden"> 
    <div class="column">
         <div>
            <!--  POPUP --->
         </div>
         <div class="fact-box">
            <p id="dataCountries">Dato Curioso</p>
         </div>
         <div class="button-row">
            <button id="buttonAddToFavorites"> add to Favorites</button>
            <button id="buttonSeeFavorites"> Favorites</button>
            <button id="buttonRefresh"> 🔁</button>
         </div>
    </div>
    <div>
        <img src="marieFactieimg2.png" alt="Marie Factie image 2"> 
    </div>
</section>
<section id="favorites" class="favorites-section hidden">
    <div id="list-favorites" class="favorites-list">
        <div class="favorite-item">Dato Curioso</div>
        <div class="favorite-item">Dato Curioso</div>
        <div class="favorite-item">Dato Curioso</div>
        <div class="favorite-item">Dato Curioso</div>
        <div class="favorite-item">Dato Curioso</div>
    </div>
    <div>
        <div>
            <img src="imagen3.png" alt="Image 3">
        </div>
        <div class="column">
            <div class="fact-box">
                <p id="dataCountries">Dato Curioso</p>
             </div> 
            <button id="buttonPlayAgain">Play again</button>
        </div>
    </div>
</section>
`

