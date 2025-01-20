import './style.css' 
import './popupBlock.js'


document.querySelector('#app').innerHTML = `
  <header>
    <img src="/logo.svg" alt="Logo" />
    <audio src="public/assets/audio.mp3" class="audio-player" controls autoplay loop muted></audio>
  </header>
  <section id="start" class="start-section">
    <div>
      <img src="public/assets/marieFactieimg.png" alt="Marie Factie image">
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
            <div class="popup-content">
                <h2>You think you're smarter than me?</h2>
                <img src="public/assets/marieFactie_angry.png" alt="Advertencia">
                <button class="closePopup">Yes I am!</button>
            </div>
        </div>
         <div class="fact-box">
            <p id="fact-content">Fun Fact</p>
         </div>
         <div class="button-row">
            <button id="buttonAddToFavorites"> add to Favorites</button>
            <button id="buttonSeeFavorites"> Favorites</button>
            <button id="buttonRefresh"> More facts 🔁</button>
         </div>
    </div>
    <div>
        <img src="public/assets/marieFactieimg2.png" alt="Marie Factie image 2"> 
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
    <div>
        <button id="buttonPlayAgain" class="play-again">Play again</button>
    </div>
</section>
<section id="confirmationPopup" class="confirmation-popup hidden">
    <div class="popup-content">
        <h2>This fact is now in your favorites!</h2>
        <div class="popup-buttons">
            <button id="closeConfirmationPopup">Close</button>
            <button id="goToFavorites">See Favorites</button>
        </div>
    </div>
</section>
<section id="aboutUs" class="about-section hidden">
    <div class="team-container">
      <div class="team-member">
        <img src="public/assets/milena.png" alt="Milena's picture">
        <h3>Milena  </h3>
        <p>Product Owner</p>
      </div>
      <div class="team-member">
        <img src="public/assets/larissa.png" alt="Larissa's picture">
        <h3>Larissa</h3>
        <p>Coder</p>
      </div>
      <div class="team-member">
        <img src="public/assets/paola.png" alt="Paola's picture">
        <h3>Paola</h3>
        <p>Scrum Master</p>
      </div>
      <div class="team-member">
        <img src="public/assets/alba.png" alt="Alba's picture">
        <h3>Alba</h3>
        <p>Coder</p>
      </div>
      <div class="team-member">
        <img src="public/assets/miriam.png" alt="Miriam's picture">
        <h3>Miriam</h3>
        <p>Coder</p>
      </div>
    </div>
    <button id="buttonBackFromAbout" class="play-again">Back to Game</button>
</section>
`

