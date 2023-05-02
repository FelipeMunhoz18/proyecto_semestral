/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const correo = document.getElementById("email");
const celular = document.getElementById("celular");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("terminos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Invalid Nickname*");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("apellido", "Invalid Last Name*");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Invalid E-mail*");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("celular", "Invalid Phone Number*");
    condicion = false;
  }
  if (contrasenia.value.length < 6 || contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Password Is too short, Must be 6 character or longer*");
    condicion = false;
  }

  var letraNombre = contrasenia.value.charAt(0);
  if (!esMayus(letraNombre)){
    mostrarMensajeError ("password","The first letter must be uppercase");
      envioCorrecto = false;
  }
  
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("repeatPassword", "Passwords are different*");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("Terms", "Accept the T.O.S*");
    condicion = false;
  } else {
    mostrarMensajeError("Terms", "");
  }
  return condicion;
}
});

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "All Set !!";
}

function esMayus (letra){
  return letra == letra.toUpperCase();
};








