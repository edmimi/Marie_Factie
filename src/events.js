import { PlayGame, addToFavorites, showFavorites } from './uiDom';

document.addEventListener("DOMContentLoaded", () => {
  let currentFact = null; 

  document.getElementById('buttonStart').addEventListener('click', async () => {
    currentFact = await PlayGame();
  });

  document.getElementById('buttonRefresh').addEventListener('click', async () => {
    currentFact = await PlayGame();
  });

  document.getElementById('buttonAddToFavorites').addEventListener('click', () => {
    if (currentFact) {
      addToFavorites(currentFact);
    } else {
      alert("Please get a fact first!");
    }
  });


});
