document.getElementById('buttonStart').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(section => {
    if (section.id === 'newFact') {
      section.classList.remove('hidden');
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
      section.classList.add('hidden');
    }
  });
});

document.getElementById('buttonSeeFavorites').addEventListener('click', () => {
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

document.getElementById('buttonPlayAgain').addEventListener('click', () => {
  document.querySelectorAll('section').forEach(section => {
    if (section.id === 'start') {
      section.classList.remove('hidden');
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
      section.classList.add('hidden');
    }
  });
});
