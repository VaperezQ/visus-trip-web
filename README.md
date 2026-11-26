# Visus Trip · Proyecto ISW-306 (Desarrollo de Aplicaciones Web)

Sitio de ofertas de viaje y alertas de vuelos desde República Dominicana.
Fase 1: maquetación con HTML5 semántico y CSS.

## Archivos

- `index.html`: página de inicio
- `registro.html`: formulario para recibir alertas (solo visual en esta fase)
- `css/estilos.css`: hoja de estilos externa compartida
- `img/`: imágenes del sitio
- `evidencias/`: capturas de las pruebas de diseño adaptable

## Ramas

- `fase-1-maquetacion`: rama de trabajo de esta fase
- `main`: versión final, se actualiza solo mediante Pull Request aprobado

## Equipo · Grupo 1

| Integrante | Rol |
| --- | --- |
| Ricardo Argely Burgos Made | Líder · contenido de la página de inicio |
| Virgilio Alberto Pérez Quezada | GitHub, ClickUp, integración, estilos generales e informe |
| Juan Del Carmen Domínguez Jáquez | Encabezado, menú y pie de página |
| Cristian De Los Santos De Los Santos | Formulario de registro |
| Lía Esther Fernández Díaz | Estilos del formulario |
| Edinson Rodríguez Nolasco | Diseño adaptable y revisión |
| Moisés De Jesús Vargas Moreaux | — |
| Ronny Ramírez Montilla | — |


---

# Fase 2 · Implementación del Front-End con React

En esta fase llevamos Visus Trip a React con Vite. La aplicación está en
la carpeta `app-react/` y tiene tres rutas, componentes reutilizables,
un filtro de ofertas, un formulario de alertas y un panel que consume
una API pública.

## Cómo ejecutarla

1. `cd app-react`
2. `npm install`
3. `npm run dev` (abre en http://localhost:5173)
4. `npm run build` (genera la versión para producción)

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/ofertas` | Ofertas, con filtro por tipo de viaje |
| `/alertas` | Formulario de alertas con confirmación en pantalla |

## Componentes

Encabezado, PiePagina, TarjetaOferta, FiltroOfertas, FormularioAlertas
y PanelAPI.

## Estado

Usamos `useState` para el filtro de ofertas, los datos del formulario y,
en PanelAPI, la lista de viajeros, si está cargando y si hubo error.
`useEffect` pide los datos a la API al abrir la página.

## API

PanelAPI consume `https://jsonplaceholder.typicode.com/users` y muestra
6 tarjetas en "Comunidad de viajeros". Son datos de demostración, no
personas reales.

## Ramas

- `fase-2-react`: rama de trabajo de esta fase
- Cada integrante trabajó en su propia rama y entregó con un Pull Request
  hacia `fase-2-react`.
- `main`: se actualiza solo con la integración final aprobada.

## Equipo · Fase 2

| Integrante | Turno |
| --- | --- |
| Moisés Vargas | Base React y rutas |
| Juan Domínguez | Inicio y componentes |
| Edinson Rodríguez | Ofertas y filtros |
| Cristian de los Santos | Alertas y formulario |
| Virgilio Pérez | API pública |
| Ricardo Burgos | Responsive y accesibilidad |
| Lía Fernández | Pruebas y documentación |

## Capturas

![Inicio](evidencias/fase-2/lia/inicio.png)
![Ofertas](evidencias/fase-2/lia/ofertas.png)
![Alertas](evidencias/fase-2/lia/alertas.png)

## Pruebas

Los resultados de las pruebas (build, rutas, menú, filtro, formulario
y API) están en el informe y el registro de pruebas del turno 7.
