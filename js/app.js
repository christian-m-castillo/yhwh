document.addEventListener('DOMContentLoaded', () => {
  
  const themeSelectElement = document.getElementById('theme-select');
  themeSelectElement.addEventListener('change', changeDisplayTheme);
  changeDisplayTheme();

  

  function changeDisplayTheme() {

    const bodyElement = document.querySelector('body');

    if (themeSelectElement.value == 'day') {
      bodyElement.style.backgroundColor = '#fff';
      bodyElement.style.color = '#000';
    } else if (themeSelectElement.value == 'night') {
      bodyElement.style.backgroundColor = '#070707';
      bodyElement.style.color = '#fff';
    } else {
      console.log('theme select error');
    }
  }
});