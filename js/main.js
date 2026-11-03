function renderNavbar() {
  const cont = document.getElementById('navbar');
  if (!cont) return;
  const base = cont.dataset.base || '';
  const activa = cont.dataset.activa || '';
  const sesion = obtenerSesion();

  const enlaces = [
    ['inicio', 'Inicio', base + 'index.html'],
    ['reportes', 'Ver reportes', base + 'pages/reportes.html'],
    ['crear', 'Reportar', base + 'pages/crear-reporte.html'],
    ['mis', 'Mis reportes', base + 'pages/mis-reportes.html']
  ];
  if (sesion && sesion.rol === 'admin') enlaces.push(['admin', 'Panel admin', base + 'pages/admin.html']);
  if (sesion) {
    enlaces.push(['salir', 'Cerrar sesión (' + sesion.nombre.split(' ')[0] + ')', '#']);
  } else {
    enlaces.push(['login', 'Ingresar', base + 'pages/login.html']);
    enlaces.push(['registro', 'Registrarse', base + 'pages/registro.html']);
  }

  const items = enlaces.map(e =>
    '<li><a href="' + e[2] + '" id="nav-' + e[0] + '" class="' + (e[0] === activa ? 'activo' : '') + '">' + e[1] + '</a></li>'
  ).join('');

  cont.innerHTML =
    '<header class="navbar"><div class="navbar-inner">' +
    '<a href="' + base + 'index.html" class="logo">Ruta<span>Segura</span></a>' +
    '<button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">&#9776;</button>' +
    '<ul class="nav-links" id="navLinks">' + items + '</ul></div></header>';

  const salir = document.getElementById('nav-salir');
  if (salir) {
    salir.addEventListener('click', function (e) {
      e.preventDefault();
      cerrarSesion();
      window.location.href = base + 'index.html';
    });
  }
}

function renderFooter() {
  const f = document.getElementById('footer');
  if (f) f.innerHTML = '<footer><p>RutaSegura Cartagena &copy; ' + new Date().getFullYear() + ' · Aplicaciones Web · UNINÚÑEZ</p></footer>';
}

renderNavbar();
renderFooter();

// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () { navLinks.classList.toggle('abierto'); });
}

// Año en el pie de la página de inicio
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();