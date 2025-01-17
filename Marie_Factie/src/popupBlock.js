let refreshCount = 0;
const maxRefreshes = 5;

function showPopup() {
  const overlay = document.querySelector("#overlay");
  const popup = document.querySelector(".popupBlock");

  if (!overlay || !popup) {
    console.error("Popup o overlay no encontrados en el DOM");
    return;
  }

  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  const overlay = document.querySelector("#overlay");
  const popup = document.querySelector(".popupBlock");

  if (!overlay || !popup) {
    console.error("Popup o overlay no encontrados en el DOM");
    return;
  }

  overlay.style.display = "none";
  popup.style.display = "none";
  refreshCount = 0;
}

function handleRefreshClick() {
  refreshCount++;
  console.log(`Clicks en Refresh: ${refreshCount}`);
  if (refreshCount >= maxRefreshes) {
    showPopup();
  }
}

function setupPopup() {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
     
      const buttonRefresh = document.querySelector("#buttonRefresh");
      const popupCloseButton = document.querySelector(".closePopup");

      console.log("Botón Refresh encontrado:", buttonRefresh);
      console.log("Botón de cerrar encontrado:", popupCloseButton);

      
      if (!buttonRefresh || !popupCloseButton) {
        console.error("No se encontraron los elementos necesarios en el DOM");
        return;
      }

      
      buttonRefresh.addEventListener("click", handleRefreshClick);
      popupCloseButton.addEventListener("click", closePopup);

      console.log("Eventos asignados correctamente.");
    }, 100); 
  });
}


window.closePopup = closePopup;


setupPopup();
