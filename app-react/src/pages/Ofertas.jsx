import { useState } from "react";
import "./ofertas.css";
import TarjetaOferta from "../components/TarjetaOferta.jsx";
import FiltroOfertas from "../components/FiltroOfertas.jsx";

// Datos de ejemplo para esta práctica. No son promociones reales.
const ofertas = [
  {
    id: 1,
    destino: "Punta Cana",
    ubicacion: "República Dominicana",
    tipo: "Paquetes",
    descripcion: "Una escapada para disfrutar de la playa y descansar unos días.",
    icono: "🏖️",
  },
  {
    id: 2,
    destino: "Nueva York",
    ubicacion: "Estados Unidos",
    tipo: "Vuelos",
    descripcion: "Una opción para conocer la ciudad y recorrer sus lugares famosos.",
    icono: "✈️",
  },
  {
    id: 3,
    destino: "Samaná",
    ubicacion: "República Dominicana",
    tipo: "Hoteles",
    descripcion: "Hospedaje para descubrir las playas y paisajes de la zona.",
    icono: "🌴",
  },
  {
    id: 4,
    destino: "Madrid",
    ubicacion: "España",
    tipo: "Vuelos",
    descripcion: "Una alternativa para visitar museos, parques y plazas.",
    icono: "🛫",
  },
  {
    id: 5,
    destino: "Puerto Plata",
    ubicacion: "República Dominicana",
    tipo: "Paquetes",
    descripcion: "Una visita al norte del país con playa y actividades turísticas.",
    icono: "☀️",
  },
  {
    id: 6,
    destino: "Santo Domingo",
    ubicacion: "República Dominicana",
    tipo: "Hoteles",
    descripcion: "Hospedaje para explorar la Zona Colonial y la ciudad.",
    icono: "🏨",
  },
];

const categorias = ["Todas", "Vuelos", "Hoteles", "Paquetes"];

export default function Ofertas() {
  const [categoria, setCategoria] = useState("Todas");
  const ofertasFiltradas =
    categoria === "Todas"
      ? ofertas
      : ofertas.filter((oferta) => oferta.tipo === categoria);

  return (
    <div className="ofertas-page">
      <section className="ofertas-hero" aria-labelledby="titulo-ofertas">
        <div>
          <span className="ofertas-etiqueta">Explora y encuentra tu próximo destino</span>
          <h1 id="titulo-ofertas">Ofertas para tu próximo viaje</h1>
          <p>
            Mira diferentes opciones de vuelos, hoteles y paquetes turísticos.
            Elige una categoría para encontrar lo que te interesa.
          </p>
        </div>
        <img
          src="/img/playa.webp"
          alt="Playa tropical con palmeras"
          className="ofertas-imagen"
        />
      </section>

      <section className="ofertas-contenido" aria-labelledby="titulo-explorar">
        <div className="ofertas-encabezado-seccion">
          <div>
            <h2 id="titulo-explorar">Explora las opciones</h2>
            <p>Filtra las ofertas por el tipo de viaje que buscas.</p>
          </div>
          <p className="ofertas-contador" aria-live="polite">
            {ofertasFiltradas.length} {ofertasFiltradas.length === 1 ? "opción" : "opciones"}
          </p>
        </div>

        <FiltroOfertas
          categorias={categorias}
          categoriaActual={categoria}
          onCambiar={setCategoria}
        />

        <div className="ofertas-grid">
          {ofertasFiltradas.map((oferta) => (
            <TarjetaOferta key={oferta.id} {...oferta} />
          ))}
        </div>

        <p className="ofertas-aviso">
          Estas ofertas son ejemplos para la práctica de la asignatura; no son precios ni promociones en tiempo real.
        </p>
      </section>
    </div>
  );
}
