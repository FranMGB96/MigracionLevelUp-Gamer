import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Comunidad } from "./pages/Comunidad";
import { Nosotros } from "./pages/Nosotros";
import { Layout } from "./layout/Layout";
import { ProductDetail } from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import { Login } from "./pages/Login";
import { Registrar } from "./pages/Registrar";
import { Perfil } from "./pages/Perfil";
import CarritoPage from "./pages/Carrito";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Products />} />  {/* Products como inicio */}
        <Route path="comunidad" element={<Comunidad />} />
        <Route path="nosotros" element={<Nosotros />} />
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
    <Route path="perfil" element={<Perfil />} />
        <Route path="products/:id" element={<ProductDetail/>} />
          <Route path="carrito" element={<CarritoPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
