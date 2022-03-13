// METODO PARA COGER LA HORA ACTUAL Y DARLE FORMATO
function horaActual() {
  
  // Creo una variable Date con la fecha del sistema (por defecto)
  fecha = new Date();
  hora = fecha.getHours();
  minuto = fecha.getMinutes();
  segundo = fecha.getSeconds();

  // Damos formato a los diferentes parametros para que si son inferiores a 10 aparezcan con un 0 delante
  if (hora < 10) {
      hora = "0" + hora;
  }

  if (minuto < 10) {
      minuto = "0" + minuto;
  }

  if (segundo < 10) {
      segundo = "0" + segundo;
  }

  var horaActual = hora + " : " + minuto + " : " + segundo;

  return horaActual;
}

// METODO PARA ACTUALIZAR EL RELOJ CADA SEGUNDO
function actualizarReloj() {

  var hora = horaActual();
  var reloj = document.getElementById("reloj");

  reloj.innerHTML = hora;
}

// Llamo a la funcion para actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);