import { HomeCarousel } from "../components/Carousel";
import { products } from "../data/products";

export const Products = () => {
  return (
    <>
      <HomeCarousel />
      <main className="container mt-5">
        <section id="catalogo" className="row g-4">
          {products.map((p) => (
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
                <button className="agregarCarrito" data-precio={p.price}>
                  Ver Detalle
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
