// MENU PARA ACCEDER A LAS FUNCIONALIDADES DEL EJERCICIO
var salir = false;
do {
  var opcion = prompt("Elige el ejercicio:\n1 - Validar fecha\n2 - Validar email\n3 - Reemplazar caracteres\n4 - Invertir nombre\n5 - Borrar etiquetas peligrosas\n6 - Salir")
  switch (opcion) {
    case "1":
      validarFecha();
      break;
    case "2":
      validarEmail();
      break;
    case "3":
      reemplazoCaracteres();
      break;
    case "4":
      invertirNombre();
      break;
    case "5":
      borrarEtiquetasPeligrosas();
      break;

    case "6":
      salir = true;
      break;
  }
} while (!salir);

// METODO PARA VALIDAR EMAIL
function validarEmail(){
  var emailValido = false;

  do {
    var email = prompt("Introduce el email");

    if (validacionEmail(email)) {
      alert("Email validado.");
      emailValido = true;
    } else {
      alert(
        "Formato de email incorrecto, vuelva a introducirlo"
      );
    }
  } while (!emailValido);

  // METODO ANIDADO QUE COMPRUEBA EL FORMATO DEL EMAIL
  function validacionEmail(email){

    var RegExPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    if ((email.match(RegExPattern)) && (email!='')) {
          return true;
    } else {
          return false;
    }
  }
}

// METODO PARA COGER LA FECHA BIEN FORMATADA DE UNA CADENA DE TEXTO
function validarFecha() {
  var fechaValida = false;

  do {
    var texto = prompt("Introduce el texto con una fecha - [dd/mm/YYYY]");

    var fecha = texto.match(/\d{2}\/\d{2}\/\d{4}/);

    if (fecha[0] != null) {
      alert("Fecha validada.");
    } else {
      alert(
        "Formato de fecha incorrecto, vuelva a introducir el texto por favor."
      );
    }
  } while (!fechaValida);
}
