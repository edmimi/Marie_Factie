export function initNavigation() {
  const sections = document.querySelectorAll('section');
  
  // Ocultar todas las secciones excepto la primera
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });

  // Manejar navegación
  document.querySelector('.primary-button').addEventListener('click', () => {
    sections[0].style.display = 'none';
    sections[1].style.display = 'block';
  });
}
