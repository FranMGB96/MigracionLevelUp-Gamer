import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const { pathname } = useLocation();
  // ocultar buscador y carrito en rutas de autenticación/perfil
  const hideControls =
    pathname === "/login" || pathname === "/registrar" || pathname === "/perfil";
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchTerm.trim();
    // navigate to home with query param q
    if (q.length > 0) {
      navigate(`/?q=${encodeURIComponent(q)}`);
    } else {
      navigate(`/`);
    }
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    const cb = document.getElementById("toggle-menu") as HTMLInputElement | null;
    if (cb && cb.checked) cb.checked = false;
  };
  return (
    <>
      <nav className="gamer-navbar">
        <div className="gamer-navbar-logo">
          <Link to="/">
            <img src="/img/level-up.png" alt="Logo gamer" />
          </Link>
          <Link to="/">
            <span>LEVEL-UP GAMER</span>
          </Link>
        </div>
        <input type="checkbox" id="toggle-menu" className="toggle-menu" />
        <label htmlFor="toggle-menu" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="gamer-navbar-content">
          <button
            className="close-nav-mobile"
            id="closeNavMobileBtn"
            type="button"
            onClick={closeMobileMenu}
          >
            &times;
          </button>
          {!hideControls && (
            <form className="gamer-navbar-search" onSubmit={onSearch} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Producto"
                aria-label="Search"
                id="searchInput"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          )}
          <div className="gamer-navbar-actions">
            <Link to="/comunidad" onClick={closeMobileMenu}>
              <i className="fa fa-users"></i> Comunidad
            </Link>
            <Link to="/login" onClick={closeMobileMenu}>
              <i className="fa fa-user"></i> Inicia sesión
            </Link>
            {!hideControls && (
              <>
                <a href="#" className="cart-btn" id="openCartModal">
                  <i className="fa fa-shopping-cart"></i>
                  Carrito (<span id="cart-count">0</span>)
                </a>
                <div
                  id="cartSidebar"
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                >
                  <button className="close-gamer-cart" id="closeCartGamerBtn">
                    &times;
                  </button>
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Resumen</h5>
                    <button
                      type="button"
                      className="btn-close"
                      id="closeCartBtn"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul id="cartItems" className="list-group mb-4"></ul>
                    <hr />
                    <p>
                      <b>Total:</b> <span id="cartTotal">$0</span>
                    </p>
                    <button className="btn btn-success w-100" id="payBtn">
                      Pagar
                    </button>
                  </div>
                </div>
              </>
            )}
            <div
              id="cartSidebar"
              className="offcanvas offcanvas-end"
              tabIndex={-1}
            >
              <button className="close-gamer-cart" id="closeCartGamerBtn">
                &times;
              </button>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Resumen</h5>
                <button
                  type="button"
                  className="btn-close"
                  id="closeCartBtn"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul id="cartItems" className="list-group mb-4"></ul>
                <hr />
                <p>
                  <b>Total:</b> <span id="cartTotal">$0</span>
                </p>
                <button className="btn btn-success w-100" id="payBtn">
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
