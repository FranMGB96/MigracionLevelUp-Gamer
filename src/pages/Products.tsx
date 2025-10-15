
import { products } from "../data/products";

export const Products = () => {
  return (
    <>
      <main className="container">
        <header className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
          <div>
            <h1 className="h3 fw-bold">Productos</h1>
            <p className="mb-0">Soluciones de informática pensadas para tu negocio.</p>
          </div>
        </header>

        <section id="catalogo" className="row g-4">
          {
            products.map(p => (
              <div
                key={p.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                data-categoria={p.category}
              >
                <div className="producto" data-codigo={p.id}>
                  <h3>{p.title}</h3>
                  <img src={p.imgSrc} alt={p.title} className="img-fluid" />
                  <p>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(p.price)}</p>
                  <button className="agregarCarrito" data-precio={p.price}>
                    Ver Detalle
                  </button>
                </div>
              </div>
            ))
          }
        </section>
      </main>
    </>
  );
};
