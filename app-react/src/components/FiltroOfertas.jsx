export default function FiltroOfertas({ categorias, categoriaActual, onCambiar }) {
  return (
    <div className="ofertas-filtros" role="group" aria-label="Filtrar ofertas por categoría">
      {categorias.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={`ofertas-filtro ${categoriaActual === opcion ? "seleccionado" : ""}`}
          aria-pressed={categoriaActual === opcion}
          onClick={() => onCambiar(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}
