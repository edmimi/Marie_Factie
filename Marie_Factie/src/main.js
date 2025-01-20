import './style.css' 
import './popupBlock.js'


document.querySelector('#app').innerHTML = `
  <section id="start" class="start-section">
    <div>
      <img src="marieFactieimg.png" alt="Marie Factie image">
    </div>
    <div class="column">
        <h1>Explore interesting facts about the world, science, history and much more with just one click.</h1>
        <h1>Save your favorites to return to them whenever you want.</h1>
        <button id="buttonStart">Play</button>
    </div>
</section>
<section id="newFact" class="new-fact-section hidden"> 
    <div class="column">
        <div id="overlay"></div>
        <div class="popupBlock">
            <h2>You think you're smarter than me?</h2>
            <img src="/marieFactie_angry.png" alt="Advertencia">
            <button class="closePopup">X</button>
        </div>
         <div class="fact-box">
            <p id="dataCountries">Fun Fact</p>
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
        <div class="favorite-item">Fun Fact</div>
        <div class="favorite-item">Fun Fact</div>
        <div class="favorite-item">Fun Fact</div>
        <div class="favorite-item">Fun Fact</div>
        <div class="favorite-item">Fun Fact</div>
    </div>
    <div class="column">
        <button id="buttonPlayAgain">Play again</button>
    </div>
</section>
`

