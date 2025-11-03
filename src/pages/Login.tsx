import { Link } from "react-router-dom";
import "../assets/login.css";

export const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación o navegación
    alert("Login enviado (demo)");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form-box-gamer rounded-4 mx-auto p-4">
            <div className="text-center mb-4">
              <img src="/img/level-up.png" alt="Level-Up Gamer" width={90} />
              <p className="text-muted mb-0">Inicio de sesión</p>
            </div>
            <form id="formLogin" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="loginCorreo">Correo @duoc.cl</label>
                <input
                  id="loginCorreo"
                  className="form-control"
                  type="email"
                  placeholder="usuario@duoc.cl"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPass" className="form-label">
                  Contraseña
                </label>
                <input id="loginPass" className="form-control" type="password" required />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
                {/* Botón Perfil: aparece debajo de Ingresar */}
                <Link to="/perfil" className="btn-gamer-profile" role="button">
                  Perfil
                </Link>
                <Link to="/registrar" className="btn btn-outline-secondary">
                  Crear una cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
