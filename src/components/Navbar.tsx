

export const Navbar = () => {
  return (
    <>
          <nav className="gamer-navbar">
        <div className="gamer-navbar-logo">
          <img src="/img/level-up.png" alt="Logo gamer" />
          <span>LEVEL-UP GAMER</span>
        </div>
        <input type="checkbox" id="toggle-menu" className="toggle-menu" />
        <label htmlFor="toggle-menu" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="gamer-navbar-content">
          <button className="close-nav-mobile" id="closeNavMobileBtn" type="button">
            &times;
          </button>
          <div className="gamer-navbar-search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Producto"
              aria-label="Search"
              id="searchInput"
            />
            <button><i className="fa fa-search"></i></button>
          </div>
          <div className="gamer-navbar-actions">
            <a href="comunidad.html" className="comunidad-btn" id="comunidadBtn">
              <i className="fa fa-users"></i> Comunidad
            </a>
            <a href="" id="openLoginModal">
              <i className="fa fa-user"></i> Inicia sesión
            </a>
            <a href="#" className="cart-btn" id="openCartModal">
              <i className="fa fa-shopping-cart"></i>
              Carrito (<span id="cart-count">0</span>)
            </a>
            <div id="cartSidebar" className="offcanvas offcanvas-end" tabIndex={-1}>
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
                <p><b>Total:</b> <span id="cartTotal">$0</span></p>
                <button className="btn btn-success w-100" id="payBtn">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}