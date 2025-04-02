import Swal from "sweetalert2";

export function alertaConfirmacion() {
  Swal.fire({
    title: "¡Bienvenido!",
    text: "Inicio de sesion exitoso",
    icon: "success",
  });
}

export function alertaError() {
  Swal.fire({
    title: "¡ERROR!",
    text: "Usuario y/o contraseña incorrectod",
    icon: "error",
  });
}
