import { Link } from "react-router-dom";

export const Carrito = () => {
  return (
    <main className="container py-5" id="carrito" style={{
      background: '#111',
      border: '3px solid #39ff14',
      borderRadius: '16px',
      boxShadow: '0 4px 18px rgba(0, 224, 255, 0.2)',
      marginTop: '40px',
      marginBottom: '40px',
    }}>
      <h1 className="display-5 fw-bold mb-4" style={{
        color: '#1e90ff',
        fontFamily: 'Orbitron, Roboto, Arial, sans-serif',
        letterSpacing: '1px',
        textAlign: 'center',
      }}>
        Carrito de Compras
      </h1>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table align-middle gamer-cart-table" style={{ background: '#181c2e', color: '#fff', borderRadius: '10px', overflow: 'hidden', borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead className="gamer-cart-thead">
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio Unitario</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                <tr className="gamer-cart-row">
                  <td>Mouse Gamer Logitech G502 HERO</td>
                  <td>$49.990</td>
                  <td>1</td>
                  <td>$49.990</td>
                  <td>
                    <button className="btn-gamer-neon btn-sm">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="gamer-cart-row">
                  <td>Silla Gamer Secretlab Titan</td>
                  <td>$349.990</td>
                  <td>1</td>
                  <td>$349.990</td>
                  <td>
                    <button className="btn-gamer-neon btn-sm">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr style={{ background: '#181c2e' }}>
                  <td colSpan={3} className="text-end fw-bold" style={{ color: '#1e90ff' }}>
                    Total:
                  </td>
                  <td colSpan={2} className="fw-bold fs-5" style={{ color: '#39ff14' }}>
                    $399.980
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <Link to="/products" className="btn-gamer-neon" style={{ fontSize: '1.1rem', padding: '8px 22px' }}>
              Seguir Comprando
            </Link>
            <button className="btn-gamer-neon" style={{ fontSize: '1.1rem', padding: '8px 22px' }}>
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
