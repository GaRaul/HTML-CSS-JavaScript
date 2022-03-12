// MENU PARA ACCEDER A LAS FUNCIONALIDADES DEL EJERCICIO
var salir = false;
do {
  var opcion = prompt(
    "Elige el ejercicio:\n1 - Validar fecha\n2 - Validar email\n3 - Reemplazar caracteres\n4 - Invertir nombre\n5 - Mostrar etiquetas peligrosas de una secuencia HTML\n6 - Salir"
  );
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
      mostrarEtiquetasPeligrosas();
      break;

    case "6":
      salir = true;
      break;
  }
} while (!salir);

// METODO PARA VALIDAR EMAIL
function validarEmail() {
  var emailValido = false;

  do {
    var email = prompt("Introduce el email");

    if (validacionEmail(email)) {
      alert("Email validado.");
      emailValido = true;
    } else {
      alert("Formato de email incorrecto, vuelva a introducirlo");
    }
  } while (!emailValido);

  // METODO ANIDADO QUE COMPRUEBA EL FORMATO DEL EMAIL
  function validacionEmail(email) {
    var RegExPattern =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;
    if (email.match(RegExPattern) && email != "") {
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

// METODO QUE COGE UN NOMBRE COMPLETO Y LO INVIERTE FORMATANDOLO EN "APELLIDO, NOMBRE"
function invertirNombre() {
  var nombreCompleto = prompt("Introduce el nombre y el apellido");

  var nombre = nombreCompleto.match(/\D*\s/);
  var apellido = nombreCompleto.match(/\s\D*/);

  alert(apellido + ", " + nombre);
}

function mostrarEtiquetasPeligrosas() {
  var secuenciaHtml =
    "<!DOCTYPE html> <html> <head> <meta charset='utf-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <title>Page Title</title> <meta name='viewport' content='width=device-width, initial-scale=1'> <script>virus</script> </head> <body> </body> </html>";
  
    var etiquetasPeligrosas = secuenciaHtml.match(/<script>\D*<\/script>/);

  alert(etiquetasPeligrosas);
  }
