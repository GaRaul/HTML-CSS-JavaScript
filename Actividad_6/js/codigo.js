var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

var numValido = false;
var numDni;
var letra;
var letraCalculada;
var dniValido = false;
var dni;

do {

  do {
    numDni = prompt("Introduce el NUMERO del DNI");

    if (numDni > 0 || numDni < 99999999) {
      numValido = true;
    } else {
        alert("El valor introducido no es valido, intentalo de nuevo")
    }

  } while (!numValido);

  letra = prompt("Introduce la LETRA del DNI");

  letraCalculada = letras[numDni % 23];

  if (letra == letraCalculada) {
    dni = numDni + letra;
    dniValido = true;
  } else {
    alert("El DNI introducido no es valido, intentalo de nuevo");
  }

} while (!dniValido);

alert("El DNI introducido es valido: " + dni);