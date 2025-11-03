import { Link, useNavigate } from "react-router-dom";
import "../assets/Registrar.css";
import { useState } from "react";

export const Registrar = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const errs: Record<string, string> = {};
    if (!data.nombre || data.nombre.trim().length < 2) {
      errs.nombre = "Nombre inválido";
    }
    // correo debe terminar en @duoc.cl
    if (!data.correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo) || !data.correo.endsWith("@duoc.cl")) {
      errs.correo = "Correo debe ser @duoc.cl";
    }
    // password requisitos básicos
    if (!data.password || data.password.length < 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password) || !/[^A-Za-z0-9]/.test(data.password)) {
      errs.password = "Contraseña no cumple requisitos";
    }
    if (data.password !== data.password2) {
      errs.password2 = "Las contraseñas no coinciden";
    }
    if (!data.comuna) {
      errs.comuna = "Selecciona una comuna";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const data: Record<string, string> = {
      nombre: (fd.get("nombre") as string) || (form.querySelector("#nombre") as HTMLInputElement).value,
      correo: (fd.get("correo") as string) || (form.querySelector("#correo") as HTMLInputElement).value,
      password: (fd.get("password") as string) || (form.querySelector("#password") as HTMLInputElement).value,
      password2: (fd.get("password2") as string) || (form.querySelector("#password2") as HTMLInputElement).value,
      telefono: (fd.get("telefono") as string) || (form.querySelector("#telefono") as HTMLInputElement).value,
      comuna: (fd.get("comuna") as string) || (form.querySelector("#comuna") as HTMLSelectElement).value,
    };

    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // simulación de registro exitoso
      setMessage("Registro exitoso. Redirigiendo a login...");
      setTimeout(() => navigate("/login"), 1400);
    } else {
      setMessage(null);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mb-4">
            <Link to="/">
              <img src="/img/level-up.png" alt="Level-Up Gamer" width={120} />
            </Link>
            <p className="text-muted mb-0">Registro de Usuarios</p>
          </div>

          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <div id="regAlert" className={message ? "alert alert-success" : "alert d-none"} role="alert">
                {message}
              </div>
              <form id="formRegistro" onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="nombre">Nombre completo</label>
                  <input id="nombre" name="nombre" className={`form-control ${errors.nombre ? "is-invalid" : ""}`} type="text" maxLength={50} placeholder="Ej: Juan Pérez" required />
                  <div className="invalid-feedback">{errors.nombre || "Sólo letras y espacios, máximo 50 caracteres."}</div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="correo">Correo @duoc.cl</label>
                  <input id="correo" name="correo" className={`form-control ${errors.correo ? "is-invalid" : ""}`} type="email" placeholder="usuario@duoc.cl" required />
                  <div className="invalid-feedback">{errors.correo || "Debe ser un correo válido @duoc.cl y no estar registrado."}</div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input id="password" name="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} type="password" required />
                    <div className="form-text">Mín. 8, con mayúscula, minúscula, número y símbolo.</div>
                    <div className="invalid-feedback">{errors.password || "La contraseña no cumple los requisitos."}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="password2">Repetir contraseña</label>
                    <input id="password2" name="password2" className={`form-control ${errors.password2 ? "is-invalid" : ""}`} type="password" required />
                    <div className="invalid-feedback">{errors.password2 || "Las contraseñas no coinciden."}</div>
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label className="form-label" htmlFor="telefono">Teléfono (opcional)</label>
                  <input id="telefono" name="telefono" className="form-control" type="tel" placeholder="+56 9 1234 5678" />
                  <div className="invalid-feedback">Ingresa un teléfono válido (7-15 dígitos/símbolos).</div>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="comuna">Comuna</label>
                  <select id="comuna" name="comuna" className={`form-select ${errors.comuna ? "is-invalid" : ""}`} required>
                    <option value="">Selecciona tu comuna…</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Providencia">Providencia</option>
                    <option value="Las Condes">Las Condes</option>
                  </select>
                  <div className="invalid-feedback">{errors.comuna || "Selecciona una comuna."}</div>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <button type="submit" className="btn btn-primary">Crear cuenta</button>
                  <Link to="/login" className="btn btn-outline-secondary">Ir a Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
