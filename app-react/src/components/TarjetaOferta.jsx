export default function TarjetaOferta({ destino, ubicacion, tipo, descripcion, icono }) {
  return (
    <article className="ofertas-tarjeta">
      <div className="ofertas-tarjeta-cabecera">
        <span className="ofertas-icono" aria-hidden="true">{icono}</span>
        <span className="ofertas-tipo">{tipo}</span>
      </div>
      <div className="ofertas-tarjeta-cuerpo">
        <h3>{destino}</h3>
        <p className="ofertas-ubicacion">{ubicacion}</p>
        <p>{descripcion}</p>
      </div>
    </article>
  );
}
