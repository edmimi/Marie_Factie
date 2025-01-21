import { fetchData } from "./apiService";
import { setItem, getItem } from "./localStorage";


export async function PlayGame() {
  const fact = await fetchData(); 
  if (fact && fact.text) {
    document.getElementById('fact-content').innerText = fact.text;
    return fact.text; 
  }
  return null;
}


export function addToFavorites(factText) {
  let favorites = getItem('favorites') || []; 

  if (favorites.includes(factText)) {
    showPopup("This fact is already in your favorites!"); 
    return;
  }

  if (favorites.length >= 5) {
    showPopup("You can only have 5 favorites. Removing the oldest one.");
    favorites.shift();

  favorites.push(factText);
  setItem('favorites', favorites);
  
  let content = "" 
  favorites.forEach(favorite =>{
    content+= '<div class="favorite-item">'+ favorite + "</div>"
    }) 
    document.getElementById("list-favorites").innerHTML = content;

  
    showConfirmationPopup();
  }

}
function showConfirmationPopup() {
  
  const overlay = document.createElement('div');
  overlay.className = 'overlay-blur';
  document.body.appendChild(overlay);

  
  const confirmationPopup = document.getElementById("confirmationPopup");
  confirmationPopup.classList.remove("hidden");
  
  
  document.getElementById("closeConfirmationPopup").addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.removeChild(overlay);
  });

  
  document.getElementById("goToFavorites").addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.removeChild(overlay);
    
    
    document.querySelectorAll('section').forEach(section => {
      if (section.id === 'favorites') {
        section.classList.remove('hidden');
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
        section.classList.add('hidden');
      }
    });
  });
}


export function getFavorites() {
  return getItem('favorites') || [];
}


export function showFavorites() {
  const favorites = getFavorites();
  const favoritesList = document.getElementById('favoritesList');

  favoritesList.innerHTML = ""; 

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<li>No favorites saved yet.</li>";
    return;
  }

  favorites.forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact;
    favoritesList.appendChild(li);
  });
}


export function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
}