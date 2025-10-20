export const Comunidad = () => {
  return (
    <>
      <main className="container my-5">
        <section className="mb-5">
          <div className="text-light p-4 d-flex align-items-center justify-content-between">
            <div className="redes-sociales">
              <div>
                <h3 className="fw-bold">¡Redes Sociales!</h3>
                <p>
                  Síguenos en nuestras redes sociales y mantente al día con los
                  mejores productos, novedades exclusivas y las últimas noticias
                  del mundo gamer.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span className="fw-bold mb-2 text-info">
                  Comparte Nuestras Redes Sociales
                </span>

                <div className="d-flex gap-3 flex-wrap justify-content-center">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://levelupgamer.com/promo"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="Compartir en Facebook"
                  >
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>

                  <a
                    href="https://twitter.com/intent/tweet?url=https://levelupgamer.com/promo&text=Échale un vistazo a esta promo gamer!"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="Compartir en X"
                  >
                    <i className="fab fa-x-twitter fa-2x"></i>
                  </a>

                  <a
                    href="https://instagram.com/levelupgamer"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>

                  <a
                    href="https://discord.com/invite/levelupgamer"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="Unirse a Discord"
                  >
                    <i className="fab fa-discord fa-2x"></i>
                  </a>

                  <a
                    href="https://www.tiktok.com/@levelupgamerofficial"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="TikTok"
                  >
                    <i className="fab fa-tiktok fa-2x"></i>
                  </a>

                  <a
                    href="https://twitch.tv/levelupgamer"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="Twitch"
                  >
                    <i className="fab fa-twitch fa-2x"></i>
                  </a>

                  <a
                    href="https://youtube.com/@levelupgamer"
                    target="_blank"
                    className="btn btn-dark border-info p-2 rounded"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
