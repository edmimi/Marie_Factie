import { fetchData } from "./apiService";
import { setItem, getItem } from "./localStorage";

// Obtiene un dato curioso de la API y lo muestra en pantalla
export async function PlayGame() {
  const fact = await fetchData(); // Llama a la API
  if (fact && fact.text) {
    document.getElementById('dataCountries').innerText = fact.text;
    return fact.text; // Devuelve solo el texto del dato curioso
  }
  return null;
}

// Añadir un dato a favoritos (máximo 5)
export function addToFavorites(factText) {
  let favorites = getItem('favorites') || []; // Obtener favoritos actuales

  if (favorites.includes(factText)) {
    showPopup("This fact is already in your favorites!"); // Evita duplicados
    return;
  }

  if (favorites.length >= 5) {
    showPopup("You can only have 5 favorites. Removing the oldest one.");
    favorites.shift(); // Eliminar el más antiguo
  }

  favorites.push(factText);
  setItem('favorites', favorites);
  
  let content = "" 
  favorites.forEach(favorite =>{
    content+= '<div class="favorite-item">'+ favorite + "</div>"
  }) 
  document.getElementById("list-favorites").innerHTML = content;

  // Mostrar popup de confirmación
  showConfirmationPopup();
}

// Nueva función para mostrar el popup de confirmación
function showConfirmationPopup() {
  // Crear y añadir el overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay-blur';
  document.body.appendChild(overlay);

  // Mostrar el popup
  const confirmationPopup = document.getElementById("confirmationPopup");
  confirmationPopup.classList.remove("hidden");
  
  // Cerrar el popup y eliminar el overlay al hacer clic en el botón cerrar
  document.getElementById("closeConfirmationPopup").addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.removeChild(overlay);
  });

  // Añadir evento para el botón de ver favoritos
  document.getElementById("goToFavorites").addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.removeChild(overlay);
    
    // Navegar a la sección de favoritos
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

// Obtener favoritos
export function getFavorites() {
  return getItem('favorites') || [];
}

// Mostrar los favoritos en la interfaz
export function showFavorites() {
  const favorites = getFavorites();
  const favoritesList = document.getElementById('favoritesList');

  favoritesList.innerHTML = ""; // Limpiar la lista antes de actualizar

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

// Mostrar un mensaje en el popup
export function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  // popupMessage.textContent = message;

  // popup.style.display = "flex";

  // document.getElementById("closePopup").addEventListener("click", () => {
  //   popup.style.display = "none";
  // });

  // window.addEventListener("click", (event) => {
  //   if (event.target === popup) {
  //     popup.style.display = "none";
  //   }
  // });
}