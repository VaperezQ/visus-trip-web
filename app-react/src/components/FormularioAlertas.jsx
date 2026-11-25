import { useState } from "react";
import "./FormularioAlertas.css";

// Valores iniciales del formulario (los mismos campos de registro.html de la Fase 1).
const valoresIniciales = {
  nombre: "",
  correo: "",
  origen: "Santo Domingo (SDQ)",
  destino: "",
  fecha: "",
  tipoOferta: "solo-vuelo",
  comentarios: "",
};

export default function FormularioAlertas() {
  // Estado controlado: cada campo vive en "datos" y se actualiza con onChange.
  const [datos, setDatos] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setDatos((anterior) => ({ ...anterior, [name]: value }));
    // Si el usuario corrige un campo con error, se quita el mensaje de ese campo.
    if (errores[name]) {
      setErrores((anterior) => ({ ...anterior, [name]: "" }));
    }
  }

  // Validación básica: nombre y correo son obligatorios.
  function validar() {
    const nuevos = {};
    if (datos.nombre.trim() === "") {
      nuevos.nombre = "Escribe tu nombre.";
    }
    if (datos.correo.trim() === "") {
      nuevos.correo = "Escribe tu correo electrónico.";
    } else if (!/^\S+@\S+\.\S+$/.test(datos.correo.trim())) {
      nuevos.correo = "Escribe un correo válido, por ejemplo nombre@correo.com.";
    }
    return nuevos;
  }

  function manejarEnvio(e) {
    e.preventDefault(); // evita que la página se recargue
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length === 0) {
      setEnviado(true); // solo se muestra la confirmación; no se guarda ni se envía nada
    }
  }

  function nuevaPreferencia() {
    setDatos(valoresIniciales);
    setErrores({});
    setEnviado(false);
  }

  if (enviado) {
    return (
      <div className="tarjeta alertas-confirmacion" role="status" aria-live="polite">
        <h2>¡Preferencias registradas!</h2>
        <p>
          Gracias, <strong>{datos.nombre.trim()}</strong>. Así quedó tu solicitud de alerta:
        </p>
        <ul>
          <li>Correo: {datos.correo.trim()}</li>
          <li>Origen: {datos.origen || "No indicado"}</li>
          <li>Destino: {datos.destino || "No indicado"}</li>
          <li>Fecha: {datos.fecha || "No indicada"}</li>
          <li>Tipo de oferta: {datos.tipoOferta === "vuelo-hotel" ? "Vuelo + hotel" : "Solo vuelo"}</li>
          {datos.comentarios.trim() && <li>Comentarios: {datos.comentarios.trim()}</li>}
        </ul>
        <p className="nota">
          Esto es una demostración visual: no se guarda información ni se enviarán correos reales.
        </p>
        <button type="button" className="boton" onClick={nuevaPreferencia}>
          Crear otra alerta
        </button>
      </div>
    );
  }

  return (
    <form className="formulario tarjeta" onSubmit={manejarEnvio} noValidate>
      <fieldset>
        <legend>Tus datos</legend>

        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={datos.nombre}
          onChange={manejarCambio}
          aria-required="true"
          aria-invalid={errores.nombre ? "true" : "false"}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="alertas-error" role="alert">
            {errores.nombre}
          </p>
        )}

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={datos.correo}
          onChange={manejarCambio}
          aria-required="true"
          aria-invalid={errores.correo ? "true" : "false"}
          aria-describedby={errores.correo ? "error-correo" : undefined}
        />
        {errores.correo && (
          <p id="error-correo" className="alertas-error" role="alert">
            {errores.correo}
          </p>
        )}
      </fieldset>

      <fieldset>
        <legend>Tu viaje</legend>

        <label htmlFor="origen">Origen</label>
        <input id="origen" name="origen" type="text" value={datos.origen} onChange={manejarCambio} />

        <label htmlFor="destino">Destino</label>
        <input
          id="destino"
          name="destino"
          type="text"
          placeholder="Ej.: Madrid"
          value={datos.destino}
          onChange={manejarCambio}
        />

        <label htmlFor="fecha">Fecha aproximada</label>
        <input id="fecha" name="fecha" type="date" value={datos.fecha} onChange={manejarCambio} />

        <span className="etiqueta-grupo" id="grupo-tipo">Tipo de oferta</span>
        <div className="opciones" role="radiogroup" aria-labelledby="grupo-tipo">
          <label>
            <input
              type="radio"
              name="tipoOferta"
              value="solo-vuelo"
              checked={datos.tipoOferta === "solo-vuelo"}
              onChange={manejarCambio}
            />
            Solo vuelo
          </label>
          <label>
            <input
              type="radio"
              name="tipoOferta"
              value="vuelo-hotel"
              checked={datos.tipoOferta === "vuelo-hotel"}
              onChange={manejarCambio}
            />
            Vuelo + hotel
          </label>
        </div>

        <label htmlFor="comentarios">Comentarios</label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows="4"
          value={datos.comentarios}
          onChange={manejarCambio}
        />
      </fieldset>

      <button type="submit" className="boton">Enviar preferencias</button>
      <p className="nota">
        Por ahora el formulario es una demostración: no se guarda información ni se envían correos reales.
      </p>
    </form>
  );
}
