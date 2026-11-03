# RutaSegura Cartagena

Aplicación web para reportar y consultar acumulaciones de agua en las vías de Cartagena durante las lluvias.

Proyecto de la asignatura **Aplicaciones Web** · Corporación Universitaria Rafael Núñez (UNINÚÑEZ).

## Integrantes
- Yoimar David Julio (Yodav009)
- Yoiser Jose Mendoza (ymendozaf21-bit)
- Juan Diego Julio
- Eder Pedroza (epedrozal21-stack)

## Tecnologías
- HTML5, CSS3 (diseño responsivo con media queries)
- JavaScript (validaciones y eventos)
- `localStorage` del navegador para simular la persistencia de datos en esta entrega

## Pantallas
1. Inicio
2. Registro
3. Inicio de sesión
4. Consultar reportes (con filtros por estado, nivel y ubicación)
5. Detalle del reporte
6. Crear reporte (con foto opcional)
7. Mis reportes
8. Panel de administración
9. Gestionar reporte (cambio de estado y eliminación)

## Funcionalidades de la tercera entrega
- Interfaces navegables y responsivas (menú hamburguesa en celular)
- Formularios con validaciones: registro, login, crear reporte y gestionar reporte
- Eventos: filtros en tiempo real, menú desplegable, cambio de estado, confirmaciones
- Control de acceso por rol (ciudadano / administrador)

## Cómo ejecutarlo
1. Clonar el repositorio: `git clone https://github.com/ymendozaf21-bit/rutasegura-cartagena.git`
2. Abrir `index.html` en el navegador.

## Usuario de prueba (administrador)
- Correo: `admin@rutasegura.com`
- Contraseña: `Admin123`

## Estructura
```
index.html
css/styles.css
js/main.js, validaciones.js, reportes.js
pages/ (registro, login, reportes, detalle, crear-reporte, mis-reportes, admin, gestionar)
```

## Próximos pasos
- Servidor con Node.js y Express
- Base de datos MySQL
- Cifrado de contraseñas y autenticación real
