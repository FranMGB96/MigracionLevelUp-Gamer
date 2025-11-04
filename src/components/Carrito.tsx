import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Carrito = () => {
  const { items, removeItem, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Manejador de pago: muestra mensaje de agradecimiento, vacía el carrito
  // y redirige a la página principal. Usamos alert() para simplicidad; si
  // quieres un toast más elegante, puedo reemplazarlo por uno.
  const handlePay = () => {
    if (items.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("Gracias por su compra");
    clearCart();
    navigate('/');
  };

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
                {items.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-4">No hay productos en el carrito.</td>
                  </tr>
                )}
                {items.map((it) => (
                  <tr key={it.id} className="gamer-cart-row">
                    <td style={{ maxWidth: 300 }}>
                      <div className="d-flex align-items-center gap-3">
                        {it.imgSrc && <img src={it.imgSrc} alt={it.title} style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 6 }} />}
                        <div>
                          <div className="fw-bold">{it.title}</div>
                          <div className="text-muted small">Código: {it.id}</div>
                        </div>
                      </div>
                    </td>
                    <td>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(it.price)}</td>
                    <td>{it.quantity}</td>
                    <td>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(it.price * it.quantity)}</td>
                    <td>
                      <button className="btn-gamer-neon btn-sm" onClick={() => removeItem(it.id)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
                {items.length > 0 && (
                  <tr style={{ background: '#181c2e' }}>
                    <td colSpan={3} className="text-end fw-bold" style={{ color: '#1e90ff' }}>
                      Total:
                    </td>
                    <td colSpan={2} className="fw-bold fs-5" style={{ color: '#39ff14' }}>
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(total)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
            <div className="d-flex justify-content-end gap-3 mt-4">
            <Link to="/" className="btn-gamer-neon" style={{ fontSize: '1.1rem', padding: '8px 22px' }}>
              Seguir Comprando
            </Link>
            <button onClick={handlePay} className="btn-gamer-neon" style={{ fontSize: '1.1rem', padding: '8px 22px' }}>
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
