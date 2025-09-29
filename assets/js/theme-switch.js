// theme-switch.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".theme-btn");
  const body = document.body;

  // Ambil tema terakhir dari localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.className = savedTheme;
  }

  // Pasang event listener ke tombol
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");

      // Ganti tema
      body.className = theme;

      // Simpan ke localStorage
      localStorage.setItem("theme", theme);
    });
  });
});



 