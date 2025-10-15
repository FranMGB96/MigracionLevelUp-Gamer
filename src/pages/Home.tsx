

export const Home = () => {
  return (
    <>
        <div
      id="carouselExampleControls"
      className="carousel slide mt-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="comunidad.html">
            <img
              src="assets/Imagen/comunidad.png"
              className="d-block mx-auto img-fluid"
              style={{maxHeight: '400px', objectFit: 'cover'}}
              alt="nosotros"
            />
          </a>
        </div>
        <div className="carousel-item">
          <a href="registrar.html">
            <img
              src="assets/Imagen/descuento20.png"
              className="d-block mx-auto img-fluid"
              style={{maxHeight: '400px', objectFit: 'cover'}}
              alt="Descuento"
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <main className="container my-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center mb-4">Catálogo de Productos</h2>

          <div className="card filtro-categorias">
            <div className="card-body">
              <h5 className="card-title">Filtrar por categoría</h5>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-categoria active" data-categoria="todos">
                  Todos
                </button>
                <button className="btn btn-categoria" data-categoria="juegos-mesa">
                  Juegos de Mesa
                </button>
                <button className="btn btn-categoria" data-categoria="accesorios">
                  Accesorios
                </button>
                <button className="btn btn-categoria" data-categoria="consolas">
                  Consolas
                </button>
                <button className="btn btn-categoria" data-categoria="pc-gamer">
                  Computadoras Gamers
                </button>
                <button className="btn btn-categoria" data-categoria="silla-gamer">
                  Sillas Gamers
                </button>
                <button className="btn btn-categoria" data-categoria="mouse">
                  Mouse
                </button>
                <button className="btn btn-categoria" data-categoria="mousepad">
                  Mousepad
                </button>
                <button className="btn btn-categoria" data-categoria="poleras">
                  Poleras Persoalizadas
                </button>
                <button className="btn btn-categoria" data-categoria="polerones">
                  Polerones Gamers Persoalizados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="catalogo" className="row g-4">
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="juegos-mesa"
        >
          <div className="producto" data-codigo="JM001">
            <h3>Catan</h3>
            <img src="assets/Imagen/catan.webp" alt="catan" className="img-fluid" />
            <p>$29.990</p>
            <button className="agregarCarrito" data-precio="29990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="juegos-mesa"
        >
          <div className="producto" data-codigo="JM002">
            <h3>Carcassonne</h3>
            <img
              src="assets/Imagen/carcassonne.jpg"
              alt="carcassonne"
              className="img-fluid"
            />
            <p>$24.990</p>
            <button className="agregarCarrito" data-precio="24990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="accesorios"
        >
          <div className="producto" data-codigo="AC001">
            <h3>Controlador Xbox Series X</h3>
            <img
              src="assets/Imagen/control-xbox.jpg"
              alt="Control-XBOX"
              className="img-fluid"
            />
            <p>$59.990</p>
            <button className="agregarCarrito" data-precio="59990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="accesorios"
        >
          <div className="producto" data-codigo="AC002">
            <h3>Auriculares HyperX Cloud II</h3>
            <img
              src="assets/Imagen/cloud2.jpg"
              alt="CloudII"
              className="img-fluid"
            />
            <p>$79.990</p>
            <button className="agregarCarrito" data-precio="79990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="consolas"
        >
          <div className="producto" data-codigo="CO001">
            <h3>Playstation 5</h3>
            <img
              src="assets/Imagen/ps5.webp"
              alt="Playstation5"
              className="img-fluid"
            />
            <p>$549.990</p>
            <button className="agregarCarrito" data-precio="549990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="pc-gamer"
        >
          <div className="producto" data-codigo="CG001">
            <h3>PC Gamer ASUS ROG Strix</h3>
            <img
              src="assets/Imagen/pc-gamer.jpg"
              alt="ASUS ROG Strix"
              className="img-fluid"
            />
            <p>$1.299.990</p>
            <button className="agregarCarrito" data-precio="1299990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="silla-gamer"
        >
          <div className="producto" data-codigo="SG001">
            <h3>Silla Gamer Secretlab Titan</h3>
            <img
              src="assets/Imagen/silla.webp"
              alt="Silla Secretlab Titan"
              className="img-fluid"
            />
            <p>$349.990</p>
            <button className="agregarCarrito" data-precio="349990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-categoria="mouse">
          <div className="producto" data-codigo="MS001">
            <h3>Mouse Gamer Logitech G502 HERO</h3>
            <img
              src="assets/Imagen/mouse.webp"
              alt="Logitech G502 HERO"
              className="img-fluid"
            />
            <p>$49.990</p>
            <button className="agregarCarrito" data-precio="49990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="mousepad"
        >
          <div className="producto" data-codigo="MP001">
            <h3>Mousepad Razer Goliathus Exteded Chroma</h3>
            <img
              src="assets/Imagen/mousepad.webp"
              alt="Razer Goliathus"
              className="img-fluid"
            />
            <p>$29.990</p>
            <button className="agregarCarrito" data-precio="29990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-categoria="poleras">
          <div className="producto" data-codigo="PP001">
            <h3>Polera Negra Persoalizada "Level-Up"</h3>
            <img
              src="assets/Imagen/polera.png"
              alt="Polera Negra Level-Up"
              className="img-fluid"
            />
            <p>$14.990</p>
            <button className="agregarCarrito" data-precio="14990">
              Agregar al carrito
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-categoria="poleras">
          <div className="producto" data-codigo="PP001">
            <h3>Polera Roja Persoalizada "Level-Up"</h3>
            <img
              src="assets/Imagen/poleraRoja.png"
              alt="Polera Roja Level-Up"
              className="img-fluid"
            />
            <p>$14.990</p>
            <button className="agregarCarrito" data-precio="14990">
              Agregar al carrito
            </button>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="polerones"
        >
          <div className="producto" data-codigo="PO001">
            <h3>Poleron Negro Persoalizado "Level-Up"</h3>
            <img
              src="assets/Imagen/poleron.png"
              alt="Poleron Negro Level-Up"
              className="img-fluid"
            />
            <p>$25.990</p>
            <button className="agregarCarrito" data-precio="25990">
              Agregar al carrito
            </button>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 col-md-4 col-lg-3"
          data-categoria="polerones"
        >
          <div className="producto" data-codigo="PO002">
            <h3>Poleron Rojo Persoalizado "Level-Up"</h3>
            <img
              src="assets/Imagen/poleroRojo.png"
              alt="Poleron Rojo Level-Up"
              className="img-fluid"
            />
            <p>$25.990</p>
            <button className="agregarCarrito" data-precio="25990">
              Agregar al carrito
            </button>
          </div>
        </div>
      </section>
    </main>

    <div
      className="modal fade"
      id="detalleProductoModal"
      tabIndex={-1}
      aria-labelledby="detalleProductoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-custom">
          <div className="modal-header">
            <h5 className="modal-title" id="detalleProductoModalLabel">
              Título Producto
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <span
              id="modalCodigoProducto"
              className="badge bg-secondary mb-2"
            ></span>
            <img
              id="modalImagenProducto"
              src=""
              alt=""
              className="img-fluid mb-3"
            />
            <p id="modalDescripcionProducto">Descripción del producto aquí.</p>
            <p id="modalPrecioProducto" className="fw-bold"></p>
          </div>
          <div className="modal-footer">
            <button
              id="modalAgregarCarrito"
              type="button"
              className="btn btn-primary"
            >
              Agregar al carrito
            </button>
            <button type="button" className="btn-gamer-review" id="verResenasBtn">
              Reseñas
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="cartSidebar" className="offcanvas offcanvas-end" tabIndex={-1}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Resumen</h5>
        <button type="button" className="btn-close" id="closeCartBtn"></button>
      </div>
      <div className="offcanvas-body">
        <ul id="cartItems" className="list-group mb-4"></ul>
        <hr />
        <p><b>Total:</b> <span id="cartTotal">$0</span></p>
        <button className="btn btn-success w-100" id="payBtn">Pagar</button>
      </div>
    </div>

    <div className="modal-bg" id="loginModal">
      <div className="modal-gamer-login">
        <button className="close-modal" id="closeLoginModal">&times;</button>
        <img
          src="assets/Imagen/level-up.png"
          style={{height: '70px', display: 'block', margin: '0 auto 10px'}}
        />
        <h2>Inicio de Sesión</h2>
        <form autoComplete="off">
          <label htmlFor="userMail">Correo @duoc.cl</label>
          <input
            type="email"
            id="userMail"
            placeholder="usuario@duoc.cl"
            required
          />
          <label htmlFor="userPass">Contraseña</label>
          <input type="password" id="userPass" placeholder="" required />
          <button type="submit" className="btn-gamer-green">Ingresar</button>
          <button type="button" className="btn-gamer-profile" id="perfilBtn">
            <i className="fa fa-user-circle"></i> Perfil
          </button>
          <button type="button" className="btn-gamer-outline" id="registrarBtn">
            <a href="registrar.html">Crear una cuenta</a>
          </button>
        </form>
      </div>
    </div>

    <section id="resenas" className="container my-5 gamer-review-section">
      <h2 className="titulo-resenas text-center">Reseñas de Producto</h2>
      <div className="list-group">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">FelipeGamer21</span>
          <small className="text-warning">★★★★★</small>
        </div>
        <p className="mb-1">
          ¡El mouse Logitech G502 HERO es increíble! Precisión total en partidas
          de Battlefield, y la entrega fue ultra rápida. 100% recomendado.
        </p>
        <small className="text-muted">Publicado el 10/09/2025</small>
      </div>
      <div className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">MariaDev</span>
          <small className="text-warning">★★★★☆</small>
        </div>
        <p className="mb-1">
          Compré la silla Secretlab Titan y mejoró mi comodidad jugando largas
          sesiones de GTA Online. Llegó ensamblada y lista. Excelente calidad.
        </p>
        <small className="text-muted">Publicado el 08/09/2025</small>
      </div>
      <div className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">NicoCodes</span>
          <small className="text-warning">★★★★★</small>
        </div>
        <p className="mb-1">
          Atención al cliente muy rápida, resolvieron mi problema en minutos por
          WhatsApp. ¡El control Xbox llegó en perfecto estado!
        </p>
        <small className="text-muted">Publicado el 06/09/2025</small>
      </div>
      <div className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">ClauStreamer</span>
          <small className="text-warning">★★★☆☆</small>
        </div>
        <p className="mb-1">
          La polera personalizada Level-Up está increíble y la impresión de alta
          calidad, pero demoró un par de días más de lo esperado.
        </p>
        <small className="text-muted">Publicado el 04/09/2025</small>
      </div>
      <div className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">PipeDMC</span>
          <small className="text-warning">★★★★★</small>
        </div>
        <p className="mb-1">
          El PC Gamer ASUS ROG Strix rinde excelente hasta en juegos pesados, y
          el soporte me ayudó con la configuración inicial. ¡Gracias!
        </p>
        <small className="text-muted">Publicado el 02/09/2025</small>
      </div>
    </section>

    <section id="agregar-resena" className="container my-5 gamer-review-section">
      <h2 className="titulo-resenas text-center">¡Escribe tu Reseña!</h2>
      <form id="formResena" className="bg-dark p-4 rounded">
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">Tu nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombreUsuario"
            maxLength={20}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">Comentario</label>
          <textarea
            className="form-control"
            id="comentario"
            rows={2}
            maxLength={200}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Calificación</label>
          <div id="ratingStars" className="fs-3" style={{color: 'gold'}}>
            <i className="fa-regular fa-star" data-rating="1"></i>
            <i className="fa-regular fa-star" data-rating="2"></i>
            <i className="fa-regular fa-star" data-rating="3"></i>
            <i className="fa-regular fa-star" data-rating="4"></i>
            <i className="fa-regular fa-star" data-rating="5"></i>
          </div>
          <input type="hidden" id="puntaje" required />
        </div>
        <button className="btn-gamer-neon btn-gamer-resena">Publicar reseña</button>
      </form>
    </section>
    
    </>
  )
}