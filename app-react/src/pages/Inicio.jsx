import { Link } from "react-router";
import PanelAPI from "../components/PanelAPI.jsx";

export default function Inicio() {
  return (
    <>
      <section id="inicio" className="portada">
        <h1>Viaja más, paga menos</h1>

        <p>
          Descubre ofertas de vuelos y paquetes turísticos desde República
          Dominicana.
        </p>

        <p>
          En Visus Trip queremos ayudarte a encontrar oportunidades para conocer
          nuevos destinos y disfrutar tus viajes.
        </p>

        <img
          src="/img/playa.webp"
          alt="Playa tropical con palmeras y un muelle"
          className="imagen-portada"
        />

        <p>
          <Link to="/alertas" className="boton">
            Quiero recibir alertas
          </Link>
        </p>
      </section>

      <section id="servicios" className="servicios">
        <h2>¿Qué ofrece Visus Trip?</h2>

        <ul className="lista-servicios">
          <li>Alertas de vuelos económicos.</li>
          <li>Ofertas de hoteles y paquetes turísticos.</li>
          <li>Consejos para planificar tus viajes.</li>
        </ul>
      </section>

      <section id="destinos" className="destinos">
        <h2>Destinos populares</h2>

        <ol className="lista-destinos">
          <li>Punta Cana, República Dominicana.</li>
          <li>Nueva York, Estados Unidos.</li>
          <li>Madrid, España.</li>
        </ol>

        <p>
          Conoce más sobre el turismo dominicano visitando el{" "}
          <a
            href="https://www.godominicanrepublic.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Se abre en una pestaña nueva"
          >
            portal oficial de turismo.
          </a>
        </p>
      </section>

      <PanelAPI />
    </>
  );
}