document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle Dropdown
  const themeToggle = document.getElementById('themeToggle');
  const themeDropdown = document.getElementById('themeDropdown');
  
  if (themeToggle && themeDropdown) {
    themeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = themeDropdown.classList.contains('opacity-100');
      
      if (isVisible) {
        themeDropdown.classList.remove('opacity-100', 'visible');
        themeDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
      } else {
        themeDropdown.classList.remove('opacity-0', 'invisible', 'scale-95');
        themeDropdown.classList.add('opacity-100', 'visible');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!themeToggle.contains(e.target) && !themeDropdown.contains(e.target)) {
        themeDropdown.classList.remove('opacity-100', 'visible');
        themeDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
      }
    });
  }
  
  // Theme switching logic
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      document.body.className = theme;
      
      // Save theme to localStorage
      localStorage.setItem('selectedTheme', theme);
      
      // Close dropdown after selection
      if (themeDropdown) {
        themeDropdown.classList.remove('opacity-100', 'visible');
        themeDropdown.classList.add('opacity-0', 'invisible', 'scale-95');
      }
      
      // Close mobile menu if open
      const mobileOverlay = document.getElementById('mobileOverlay');
      if (mobileOverlay && mobileOverlay.classList.contains('translate-x-0')) {
        mobileOverlay.classList.remove('translate-x-0');
        mobileOverlay.classList.add('-translate-x-full');
      }
    });
  });
  
  // Load saved theme on page load
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }
  
  // Hamburger menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeOverlay = document.getElementById('closeOverlay');
  const mobileOverlay = document.getElementById('mobileOverlay');
  
  if (hamburgerBtn && mobileOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      mobileOverlay.classList.remove('-translate-x-full');
      mobileOverlay.classList.add('translate-x-0');
    });
  }
  
  if (closeOverlay && mobileOverlay) {
    closeOverlay.addEventListener('click', () => {
      mobileOverlay.classList.remove('translate-x-0');
      mobileOverlay.classList.add('-translate-x-full');
    });
  }
});