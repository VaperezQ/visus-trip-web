# Edinson Rodríguez Nolasco — Diseño responsive

**Proyecto:** Visus Trip
**Asignatura:** Desarrollo de Aplicaciones Web (ISW-306)
**Parte asignada:** Turno 7 — adaptación a dispositivos y revisión de enlaces e imágenes.

## Mi aporte

Revisé cómo se ven las páginas de inicio y registro en pantallas de diferentes tamaños. En la página de inicio, las tarjetas de servicios y destinos se salían de la pantalla en celulares pequeños.

Añadí reglas `@media` al final de `css/estilos.css` para acomodar las tarjetas en dos columnas en tabletas y en una columna en celulares. También ajusté la portada para que el texto y la imagen se distribuyan mejor en pantallas pequeñas.

Solo se añadieron estilos responsive. No se modificaron los archivos HTML, las imágenes ni los estilos originales del formulario.

## Pruebas y resultados

- Se revisaron las páginas en resoluciones de celular, tableta y computadora.
- Antes de los ajustes, el inicio tenía desplazamiento horizontal de 124 px en una pantalla de 320 px y de 73 px en una de 375 px.
- Después de los ajustes, no se detectó desbordamiento horizontal en las resoluciones probadas, de 320 a 1366 px.
- El formulario de registro ya se adaptaba correctamente y no requirió cambios.
- Los enlaces internos entre ambas páginas y la ruta de la imagen local apuntan a archivos existentes.

Queda pendiente comprobar el enlace externo al portal de turismo y completar la validación con las herramientas del W3C.

## Capturas de las pruebas

- `ANTES_inicio_375.png`: inicio en celular antes de los ajustes.
- `DESPUES_inicio_375.png`: inicio en celular después de los ajustes.
- `DESPUES_inicio_1366.png`: inicio en computadora.
- `DESPUES_registro_375.png`: formulario en celular.
- `DESPUES_registro_1366.png`: formulario en computadora.

Las capturas corresponden a pruebas locales del proyecto.
