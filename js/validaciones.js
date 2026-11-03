const CLAVE_USUARIOS = 'rs_usuarios';
const CLAVE_SESION = 'rs_sesion';

function obtenerUsuarios() { return JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || []; }
function guardarUsuarios(lista) { localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(lista)); }
function obtenerSesion() { return JSON.parse(localStorage.getItem(CLAVE_SESION)); }
function iniciarSesion(u) {
  localStorage.setItem(CLAVE_SESION, JSON.stringify({ nombre: u.nombre, correo: u.correo, rol: u.rol }));
}
function cerrarSesion() { localStorage.removeItem(CLAVE_SESION); }

// Usuario administrador de prueba
function inicializarAdmin() {
  const usuarios = obtenerUsuarios();
  if (!usuarios.some(u => u.correo === 'admin@rutasegura.com')) {
    usuarios.push({ nombre: 'Administrador', correo: 'admin@rutasegura.com', clave: 'Admin123', rol: 'admin' });
    guardarUsuarios(usuarios);
  }
}
inicializarAdmin();

function correoValido(correo) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo); }

function marcarError(input, mensaje) {
  input.classList.add('invalido');
  input.classList.remove('valido');
  const msg = input.parentElement.querySelector('.error-msg');
  if (msg) msg.textContent = mensaje;
}
function marcarValido(input) {
  input.classList.add('valido');
  input.classList.remove('invalido');
  const msg = input.parentElement.querySelector('.error-msg');
  if (msg) msg.textContent = '';
}
function mostrarAlerta(id, tipo, texto) {
  const caja = document.getElementById(id);
  caja.className = 'alerta ' + tipo;
  caja.textContent = texto;
}