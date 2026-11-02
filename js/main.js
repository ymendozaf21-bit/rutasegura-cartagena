// Menú hamburguesa: abre y cierra el menú en celular
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('abierto');
  });
}

// Año automático en el pie de página
const anio = document.getElementById('anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}