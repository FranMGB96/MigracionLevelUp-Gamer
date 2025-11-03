import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <main className="container mt-5">
                <p className="lead">Producto no encontrado.</p>
                <Link to="/" className="btn btn-outline-secondary">
                    Volver al catálogo
                </Link>
            </main>
        );
    }

    return (
        <>
            <main className="container">
                <div className="row g-4 mt-4">
                    <div className="col-12 col-lg-6">
                                    <div className="card border-0">
                                        <div className="ratio ratio-16x9 bg-body-secondary rounded d-flex align-items-center justify-content-center">
                                            <img
                                                src={product.imgSrc}
                                                alt={product.title}
                                                className="rounded"
                                                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", objectPosition: "center center" }}
                                            />
                                        </div>
                                    </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="text-uppercase small text-secondary">{product.category}</span>
                            <span className="small text-secondary">Código: {product.id}</span>
                        </div>

                        <h1 className="h3 mt-1">{product.title}</h1>

                        <hr className="my-3" />

                        <div className="d-flex align-items-center gap-3">
                            <div className="price-now">
                                {new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(
                                    product.price
                                )}
                            </div>
                        </div>

                        <div className="buy-cta mt-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <span className="small text-secondary">Cantidad</span>
                                <div className="input-group" style={{ width: "140px" }}>
                                    <button className="btn btn-outline-secondary" type="button">
                                        -
                                    </button>
                                    <input type="number" className="form-control text-center" defaultValue={1} min={1} max={5} />
                                    <button className="btn btn-outline-secondary" type="button">
                                        +
                                    </button>
                                </div>
                                <span className="small text-secondary">Máximo 5 unidades.</span>
                            </div>

                            <button className="btn btn-dark btn-lg w-50">
                                <i className="fa fa-cart-plus me-2"></i> Agregar al Carro
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row g-6 mt-1 mt-lg-4">
                    <div className="col-12 col-lg-12">
                        <div className="card border-0">
                            <div className="card-body">
                                <h3 className="h5">Descripción</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductDetail;
