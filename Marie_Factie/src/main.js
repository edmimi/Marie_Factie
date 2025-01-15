import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <!-- Sección 1: Welcome -->
    <section class="welcome-section">
      <div class="character-card">
        <img src= public/marieFactie.png alt="Character" class="character-image" />
        <div class="welcome-text">
          <h2>Welcome</h2>
          <p>Explora hechos interesantes sobre el mundo, la ciencia, la historia y mucho más con este set de cartas.</p>
          <button class="primary-button">Comenzar</button>
        </div>
      </div>
    </section>

    <!-- Sección 2: Card Generate -->
    <section class="generate-section">
      <h2>Card Generate</h2>
      <div class="card-display">
        <div class="fact-card">
          <h3>Dato curioso</h3>
          <button class="generate-button">Generar nuevo dato</button>
        </div>
      </div>
    </section>

    <!-- Sección 3: Favorite Cards -->
    <section class="favorite-section">
      <h2> Favorite Cards</h2>
      <div class="cards-grid">
        <div class="card placeholder"></div>
        <div class="card placeholder"></div>
        <div class="card placeholder"></div>
        <div class="card placeholder"></div>
        <div class="card placeholder"></div>
      </div>
    </section>

    <!-- Sección 4: See Favorite -->
    <section class="see-favorite-section">
      <h2>See Favorite</h2>
      <div class="favorite-display">
        <div class="fact-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button class="primary-button">Ver más</button>
        </div>
      </div>
    </section>
  </div>
`

