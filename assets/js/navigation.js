// navigation.js - Hamburger Menu Handler
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeOverlay = document.getElementById('closeOverlay');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
  
  // Open mobile menu
  if (hamburgerBtn && mobileOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      mobileOverlay.classList.remove('-translate-x-full');
      mobileOverlay.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });
  }
  
  // Close mobile menu
  if (closeOverlay && mobileOverlay) {
    closeOverlay.addEventListener('click', () => {
      mobileOverlay.classList.remove('translate-x-0');
      mobileOverlay.classList.add('-translate-x-full');
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close menu when clicking nav links
  navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
      mobileOverlay.classList.remove('translate-x-0');
      mobileOverlay.classList.add('-translate-x-full');
      document.body.style.overflow = 'auto';
    });
  });
});