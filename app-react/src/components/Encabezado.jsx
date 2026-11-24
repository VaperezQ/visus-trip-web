import { Link, NavLink } from "react-router";

function enlaceActivo({ isActive }) {
  return isActive ? "activo" : undefined;
}

export default function Encabezado() {
  return (
    <header className="encabezado">
      <Link to="/" className="logo">
        VISUS TRIP
      </Link>
      <nav className="menu" aria-label="Principal">
        <ul>
          <li>
            <NavLink to="/" className={enlaceActivo} end>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/ofertas" className={enlaceActivo}>
              Ofertas
            </NavLink>
          </li>
          <li>
            <NavLink to="/alertas" className={enlaceActivo}>
              Alertas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}