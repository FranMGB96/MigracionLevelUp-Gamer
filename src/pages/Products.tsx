import { HomeCarousel } from "../components/Carousel";
import { Reviews } from "../components/Reviews";
import { products } from "../data/products";
import { useSearchParams, useNavigate } from "react-router-dom";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase().trim() ?? "";
  const navigate = useNavigate();

  const filtered = q
    ? products.filter((p) => p.title.toLowerCase().includes(q))
    : products;

  return (
    <>
      <HomeCarousel />
      <main className="container mt-5">
        {q && filtered.length === 0 && (
          <p className="lead">No se encontraron productos para "{q}"</p>
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
                <button
                  type="button"
                  className="agregarCarrito mt-2"
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
          ))}
        </section>
        <Reviews />
      </main>
    </>
  );
};
