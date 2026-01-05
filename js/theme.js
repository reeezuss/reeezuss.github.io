// Theme management and font loading
(function() {
  'use strict';

  // Theme configuration
  const themes = ['gruvbox', 'light', 'dark'];
  const themeNames = {
    gruvbox: 'Gruvbox',
    light: 'Light',
    dark: 'Dark'
  };

  // Get saved theme or default to gruvbox
  function getSavedTheme() {
    const saved = localStorage.getItem('theme');
    return saved && themes.includes(saved) ? saved : 'gruvbox';
  }

  // Set theme on document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update theme button text if it exists
    const themeBtn = document.getElementById('theme-cycle-btn');
    if (themeBtn) {
      themeBtn.textContent = themeNames[theme];
    }
  }

  // Cycle through themes
  function cycleTheme() {
    const currentTheme = getSavedTheme();
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
  }

  // Font loading to prevent FOUC
  function loadFonts() {
    const fontPromises = [
      document.fonts.load('400 1em "Berkeley Mono"'),
      document.fonts.load('400 1em Merriweather')
    ];

    Promise.all(fontPromises)
      .then(() => {
        document.body.classList.add('ready');
      })
      .catch(() => {
        // Fallback: show content even if fonts fail
        setTimeout(() => document.body.classList.add('ready'), 100);
      });
  }

  // Initialize on DOM ready
  function init() {
    // Set initial theme
    const initialTheme = getSavedTheme();
    setTheme(initialTheme);

    // Setup theme button if it exists
    const themeBtn = document.getElementById('theme-cycle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', cycleTheme);
    }

    // Load fonts
    loadFonts();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();