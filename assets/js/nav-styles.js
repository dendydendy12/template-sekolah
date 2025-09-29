// nav-styles.js - Navigation Hover Effects
document.addEventListener('DOMContentLoaded', function() {
  // Desktop nav links hover
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = 'var(--primary)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'var(--text)';
    });
  });
  
  // Mobile nav links hover
  const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
  navLinksMobile.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = 'var(--primary)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'var(--text)';
    });
  });
  
  // Desktop buttons
  const btnOutline = document.querySelectorAll('.btn-outline');
  btnOutline.forEach(btn => {
    btn.style.border = '1px solid var(--primary)';
    btn.style.color = 'var(--primary)';
    btn.style.backgroundColor = 'transparent';
    
    btn.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--primary)';
      this.style.color = 'var(--background)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.color = 'var(--primary)';
    });
  });
  
  const btnPrimary = document.querySelectorAll('.btn-primary');
  btnPrimary.forEach(btn => {
    btn.style.backgroundColor = 'var(--primary)';
    btn.style.color = 'var(--background)';
    
    btn.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--secondary)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'var(--primary)';
    });
  });
  
  // Mobile buttons
  const btnOutlineMobile = document.querySelectorAll('.btn-outline-mobile');
  btnOutlineMobile.forEach(btn => {
    btn.style.border = '1px solid var(--primary)';
    btn.style.color = 'var(--primary)';
    btn.style.backgroundColor = 'transparent';
    
    btn.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--primary)';
      this.style.color = 'var(--background)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.color = 'var(--primary)';
    });
  });
  
  const btnPrimaryMobile = document.querySelectorAll('.btn-primary-mobile');
  btnPrimaryMobile.forEach(btn => {
    btn.style.backgroundColor = 'var(--primary)';
    btn.style.color = 'var(--background)';
    
    btn.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--secondary)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'var(--primary)';
    });
  });
});