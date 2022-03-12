// METODO QUE PONE EL RESULTADO DE LA OPERACION EN LA PANTALLA DE LA CALCULADORA
function operacion() {
  valoresString = document.getElementById("resultado").value;

  document.getElementById("resultado").value = calcular(valoresString);

}

// DEFINO VARIAS FUNCIONES PARA USAR LOS OPERADORES SOBRE UN STRING EN OTRA FUNCION
function suma(a, b) {
  return a + b;
}
function rest(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mult(a, b) {
  return a * b;
}

// DEFINO VARIAS CONSTANTES PARA QUE LOS CARACTERES DE LOS OPERADORES LLAMEN A UNA FUNCION
const operaciones = { "+": suma, "-": rest, "/": div, "*": mult };

// METODO QUE CALCULA EL RESULTADO A PARTIR DE UN STRING
function calcular(str) {
  const arreglo = str.split(" ");
  valor_previo = Number(arreglo[0]);
  for (let i = 1; i < arreglo.length; i = i + 2) {
    valor_previo = operaciones[arreglo[i]](
      valor_previo,
      Number(arreglo[i + 1])
    );
  }
  return valor_previo;
}

// METODO PARA INTRODUCIR VALORES A LA PANTALLA DE LA CALCULADORA
function introducir(valor) {
  var valorPantalla = document.getElementById("resultado").value;

  // Si es un . compruebo que no haya mas puntos y que no lo ponga al principio
  if (valor == ".") {
    if (
      (Number(valorPantalla.charAt(valorPantalla.length - 1)) <= 0 ||
        Number(valorPantalla.charAt(valorPantalla.length - 1)) >= 0) &&
      valorPantalla != "" &&
      valorPantalla.charAt(valorPantalla.length - 1 != " ")
    ) {
      document.getElementById("resultado").value += valor;

        
        // INTENTO CONTROLAR PARA PODER PONER PUNTOS EN CUALQUIER NUMERO ENTERO DE LA PANTALLA
      /*var valoresArray = valorPantalla.split(" ");
      console.log(valoresArray);

      for (let i = 0; i < valoresArray.length; i++) {
        var numeroDecimal = false;
        for (let j = 0; j < valoresArray[i].length; j++) {
          if (Number(valoresArray[i].charAt(j).isNaN())) {
            numeroDecimal = true;
          }
        }

        if (!numeroDecimal) {
          document.getElementById("resultado").value += valor;
        }
      }*/
    }

    // Si es un operador compruebo que no lo ponga al principio ni justo despues de otro
  } else if (valor == "+" || valor == "-" || valor == "/" || valor == "*") {
    if (
      valorPantalla.charAt(valorPantalla.length - 1) != " " &&
      valorPantalla.charAt(valorPantalla.length - 1) != "." &&
      valorPantalla.charAt(0) != ""
    ) {
      document.getElementById("resultado").value += " " + valor + " ";
    }
  } else {
    document.getElementById("resultado").value += valor;
  }
}

// METODO PARA LIMPIAR LA PANTALLA DE LA CALCULADORA
function limpiar() {
  document.getElementById("resultado").value = "";
}
