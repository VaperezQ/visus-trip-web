# Visus Trip · Aplicación React (fase 2)

Aplicación web del proyecto Visus Trip (ISW-306, Grupo 1), hecha con React y Vite.

## Cómo ejecutarla

```
cd app-react
npm install
npm run dev
```

Para comprobar que compila: `npm run build`.

## Rutas

- `/` Inicio
- `/ofertas` Ofertas
- `/alertas` Alertas

## Fuente de datos (API pública)

- **API:** JSONPlaceholder, `https://jsonplaceholder.typicode.com/users`
- **Componente:** `src/components/PanelAPI.jsx`, mostrado en la página de Inicio.
- **Campos usados:** `id`, `name`, `email`, `address.city` y `company.name`.
- **Estados:** muestra «Cargando datos…» mientras consulta, la lista de tarjetas cuando recibe los datos y un mensaje de error si la consulta falla.
- Los datos son ficticios y de práctica: no son personas, vuelos ni tarifas reales.
