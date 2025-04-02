/* rafce -> Crea un componente funcional  flecha */
/* rfce -> Crea un componente funcional regular */
import { useState } from "react";
import { alertaConfirmacion, alertaError } from "../helpers/funciones";
import "./Login.css";

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getHoraLogin, setHoraLogin] = useState(null);

  function inicioSesion() {
    if (getUsuario === "Admin" && getPassword === "admin") {
      alertaConfirmacion();
      let horaInicio = new Date();
      console.log(horaInicio);
      // setHoraLogin(new Date().toLocaleDateString());
      // console.log(getHoraLogin);
    } else alertaError();
    let horaIniciIncorrecto = new Date();
    console.log(
      horaIniciIncorrecto,
      "Hora de inicio de sesión sospechoso o incorrecto"
    );
  }

  return (
    <form className="form">
      Sign Up
      <input
        onChange={(e) => setUsuario(e.target.value)}
        type="text"
        className="input"
        placeholder="Name"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="input"
        placeholder="Password"
      />
      <button type="button" onClick={inicioSesion}>
        Submit
      </button>
    </form>
  );
};

export default Login;
