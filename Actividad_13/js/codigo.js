var fechaValida = false;

do {
  var texto = prompt("Introduce la fecha - [dd/mm/YYYY]");

  var fecha = texto.match(/\d{2}\/\d{2}\/\d{4}/);

  if(fecha[0] != null) {
    alert("Fecha validada.");

  } else {
    alert("Formato de fecha incorrecto, vuelva a introducir el texto por favor.")
  }

} while (!fechaValida);
