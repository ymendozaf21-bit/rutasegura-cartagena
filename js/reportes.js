const CLAVE_REPORTES = 'rs_reportes';

function escapeHtml(t) {
  return String(t).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function capitalizar(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
function formatoFecha(iso) {
  return new Date(iso).toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
}

function reportesIniciales() {
  const f = new Date().toISOString();
  return [
    { id: 1, ubicacion: 'Vía principal La Gran Manzana', descripcion: 'Acumulación de agua que cubre un carril completo.', nivel: 'alto', estado: 'pendiente', fecha: f, autor: 'demo@rutasegura.com', autorNombre: 'Usuario Demo', foto: '', historial: [{ estado: 'pendiente', fecha: f }] },
    { id: 2, ubicacion: 'Entrada al centro comercial', descripcion: 'Charco profundo en la entrada de vehículos.', nivel: 'medio', estado: 'verificado', fecha: f, autor: 'demo@rutasegura.com', autorNombre: 'Usuario Demo', foto: '', historial: [{ estado: 'pendiente', fecha: f }, { estado: 'verificado', fecha: f }] },
    { id: 3, ubicacion: 'Calle lateral norte', descripcion: 'Poca agua acumulada, ya se está drenando.', nivel: 'bajo', estado: 'resuelto', fecha: f, autor: 'demo@rutasegura.com', autorNombre: 'Usuario Demo', foto: '', historial: [{ estado: 'pendiente', fecha: f }, { estado: 'resuelto', fecha: f }] }
  ];
}

function obtenerReportes() {
  let r = JSON.parse(localStorage.getItem(CLAVE_REPORTES));
  if (!r) {
    r = reportesIniciales();
    localStorage.setItem(CLAVE_REPORTES, JSON.stringify(r));
  }
  return r;
}
function guardarReportes(lista) { localStorage.setItem(CLAVE_REPORTES, JSON.stringify(lista)); }

function tarjetaReporte(r) {
  const img = r.foto ? '<img src="' + r.foto + '" alt="Foto del reporte">' : 'Sin foto';
  return '<article class="card"><div class="card-img">' + img + '</div><div class="card-body">' +
    '<h3>' + escapeHtml(r.ubicacion) + '</h3>' +
    '<p>' + formatoFecha(r.fecha) + '</p>' +
    '<span class="badge ' + r.nivel + '">Nivel ' + r.nivel + '</span> ' +
    '<span class="badge ' + r.estado + '">' + capitalizar(r.estado) + '</span>' +
    '<p><a href="detalle.html?id=' + r.id + '">Ver detalle</a></p></div></article>';
}

// Reduce la foto para que quepa en el almacenamiento del navegador
function fotoComprimida(archivo, callback) {
  const lector = new FileReader();
  lector.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const max = 700;
      const escala = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = img.width * escala;
      canvas.height = img.height * escala;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.src = e.target.result;
  };
  lector.readAsDataURL(archivo);
}