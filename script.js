// script.js
document.addEventListener('DOMContentLoaded', () => {
  const settingsMenu = document.getElementById('settings-menu');
  const closeSettingsButton = document.getElementById('close-settings');
  const uploadFileInput = document.getElementById('upload-file');
  const darkModeCheckbox = document.getElementById('dark-mode');

  // Function to toggle settings menu visibility
  function toggleSettingsMenu() {
    settingsMenu.classList.toggle('hidden');
    settingsMenu.classList.toggle('visible');
  }

  // Event listener for keydown event
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      toggleSettingsMenu();
    }
  });

  // Event listener for close button
  closeSettingsButton.addEventListener('click', () => {
    toggleSettingsMenu();
  });
  

  // Event listener for file upload
  uploadFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file);
    // Implement additional file handling logic here
  });

   // Function to apply or remove dark mode
  function applyDarkMode(enabled) {
    if (enabled) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      darkModeCheckbox.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      darkModeCheckbox.checked = false;
    }
  }

  // Set initial mode based on localStorage or default to light mode
  const darkModeSetting = localStorage.getItem('darkMode');
  if (darkModeSetting === 'enabled') {
    applyDarkMode(true);
  } else {
    applyDarkMode(false);
  }

  // Toggle dark mode on checkbox change
  darkModeCheckbox.addEventListener('change', (event) => {
    applyDarkMode(event.target.checked);
  });
  // Event listener for volume slider
  volumeSlider.addEventListener('input', (event) => {
  console.log('Volume:', event.target.value);
  // Implement volume adjustment logic here
  });
});