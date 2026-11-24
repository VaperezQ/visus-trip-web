import { Routes, Route, Link } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Alertas from "./pages/Alertas.jsx";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/ofertas">Ofertas</Link> |{" "}
        <Link to="/alertas">Alertas</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="*" element={<p>Pagina no encontrada</p>} />
        </Routes>
      </main>
    </>
  );
}