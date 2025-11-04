import { HomeCarousel } from "../components/Carousel";
import { Reviews } from "../components/Reviews";
import { products } from "../data/products";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useMemo, useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../assets/Filtros.css';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase().trim() ?? "";
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  // Estados para los filtros
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);

  // Obtener categorías únicas de los productos
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Obtener precio mínimo y máximo de los productos
  const minPriceProductos = useMemo(() => 
    Math.min(...products.map(p => p.price))
  , []);

  const maxPriceProductos = useMemo(() => 
    Math.max(...products.map(p => p.price))
  , []);

  // Aplicar todos los filtros
  const filtered = useMemo(() => {
    return products
      .filter(p => q ? p.title.toLowerCase().includes(q) : true)
      .filter(p => selectedCategory === "all" ? true : p.category === selectedCategory)
      .filter(p => p.price >= minPrice && p.price <= maxPrice);
  }, [q, selectedCategory, minPrice, maxPrice]);

  return (
    <>
      <HomeCarousel />
      <main className="container mt-5">
        {/* Filtros con nuevo diseño */}
        <div className="filters-container">
          <h3 className="filters-title">
            <i className="fa fa-filter"></i> Filtros de Búsqueda
          </h3>
          <div className="filters-content">
            {/* FILTRO DE CATEGORIA */}
            <div className="filter-group">
              <label htmlFor="category">
                <i className="fa fa-tags"></i> Categoría
              </label>
              <select
                name="category"
                id="category"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "Todos los productos" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* FILTRO DE PRECIO */}
            <div className="filter-group">
              <label>
                <i className="fa fa-dollar-sign"></i> Rango de Precio
              </label>
              <div className="price-inputs">
                <div className="price-group">
                  <input
                    id="minPrice"
                    type="number"
                    placeholder="Mín"
                    value={minPrice}
                    onChange={(e) =>
                      e.target.value === ""
                        ? setMinPrice(minPriceProductos)
                        : setMinPrice(Number(e.target.value))
                    }
                  />
                  <div className="price-value">
                    {new Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    }).format(minPrice)}
                  </div>
                </div>
                <div className="price-group">
                  <input
                    id="maxPrice"
                    type="number"
                    placeholder="Máx"
                    value={maxPrice}
                    onChange={(e) =>
                      e.target.value === ""
                        ? setMaxPrice(maxPriceProductos)
                        : setMaxPrice(Number(e.target.value))
                    }
                  />
                  <div className="price-value">
                    {new Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    }).format(maxPrice)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="alert alert-info">
            <i className="fa fa-info-circle"></i> No se encontraron productos con los filtros seleccionados
          </div>
        )}
        <section id="catalogo" className="row g-4">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              data-categoria={p.category}
            >
              <div className="producto" data-codigo={p.id}>
                <h3>{p.title}</h3>
                <img src={p.imgSrc} alt={p.title} className="img-fluid" />
                <p>
                  {new Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  }).format(p.price)}
                </p>
                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className="agregarCarrito"
                    onClick={() => {
                      addItem({ id: p.id, title: p.title, price: p.price, imgSrc: p.imgSrc }, 1);
                      const cb = document.getElementById("toggle-menu") as HTMLInputElement | null;
                      if (cb && cb.checked) cb.checked = false;
                      alert('Producto añadido al carrito');
                    }}
                  >
                    Agregar al Carro
                  </button>

                  <button
                    type="button"
                    className="btn-gamer-neon mt-2"
                    onClick={() => {
                      navigate(`/products/${p.id}`);
                      const cb = document.getElementById("toggle-menu") as HTMLInputElement | null;
                      if (cb && cb.checked) cb.checked = false;
                    }}
                  >
                    Ver Detalle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Reviews />
      </main>
    </>
  );
};
