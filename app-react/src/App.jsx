import { Routes, Route } from "react-router";
import Encabezado from "./components/Encabezado.jsx";
import PiePagina from "./components/PiePagina.jsx";
import Inicio from "./pages/Inicio.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Alertas from "./pages/Alertas.jsx";

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </main>
      <PiePagina />
    </>
  );
}