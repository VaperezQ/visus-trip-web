import FormularioAlertas from "../components/FormularioAlertas.jsx";

export default function Alertas() {
  return (
    <section className="registro" aria-labelledby="titulo-alertas">
      <span className="etiqueta">Alertas personalizadas</span>
      <h1 id="titulo-alertas">Recibe alertas de viaje</h1>
      <p>
        Cuéntanos qué viaje te interesa y deja tus preferencias. Esta práctica muestra el
        formulario funcionando en pantalla, sin enviar correos reales.
      </p>
      <FormularioAlertas />
    </section>
  );
}
