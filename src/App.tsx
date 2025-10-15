import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Comunidad } from "./pages/Comunidad";
import { Nosotros } from "./pages/Nosotros";
import { Layout } from "./layout/Layout";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Products />} />  {/* Products como inicio */}
        <Route path="comunidad" element={<Comunidad />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="products/:id" element={<ProductDetail/>} />
      </Route>
    </Routes>
  );
}

export default App;
