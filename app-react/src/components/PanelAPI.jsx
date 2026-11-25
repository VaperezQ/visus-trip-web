import { useEffect, useState } from "react";
import "./PanelAPI.css";

// API pública de práctica: devuelve usuarios ficticios en formato JSON.
const URL_API = "https://jsonplaceholder.typicode.com/users";

export default function PanelAPI() {
  const [viajeros, setViajeros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Permite cancelar la consulta si el usuario cambia de página.
    const controlador = new AbortController();

    async function cargarViajeros() {
      try {
        const respuesta = await fetch(URL_API, { signal: controlador.signal });

        if (!respuesta.ok) {
          throw new Error(`La API respondió con el código ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        setViajeros(datos.slice(0, 6));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("No se pudieron cargar los datos. Intenta de nuevo más tarde.");
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarViajeros();

    return () => controlador.abort();
  }, []);

  return (
    <section className="panel-api" aria-labelledby="titulo-panel-api">
      <h2 id="titulo-panel-api">Comunidad de viajeros</h2>
      <p className="panel-api-aviso">
        Datos de demostración obtenidos de la API pública JSONPlaceholder. No
        son personas, vuelos ni tarifas reales.
      </p>

      {cargando && (
        <p className="panel-api-estado" role="status">
          Cargando datos…
        </p>
      )}

      {!cargando && error && (
        <p className="panel-api-error" role="alert">
          {error}
        </p>
      )}

      {!cargando && !error && (
        <ul className="panel-api-lista">
          {viajeros.map((viajero) => (
            <li key={viajero.id} className="panel-api-tarjeta">
              <h3>{viajero.name}</h3>
              <p>Ciudad: {viajero.address.city}</p>
              <p>Correo: {viajero.email}</p>
              <p>Empresa: {viajero.company.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
