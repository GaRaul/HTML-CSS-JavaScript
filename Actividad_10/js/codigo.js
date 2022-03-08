var texto = prompt("Introduce una cadena de texto");

function palindromo(texto) {
  var textoCharList = texto.split("");
  texto = "";

  for (let index = 0; index < textoCharList.length; index++) {
    if (textoCharList[index] != " ") {
      texto += textoCharList[index];
    }
  }

  var textoList = texto.split("");

  console.log(textoList);
  console.log(textoList.reverse());

  for (let index = 0; index < textoList.length; index++) {
    if (textoList[index] != textoList.reverse()[index]) {
      return "No es palindromo";
    }
  }

  return "Es palindromo";
}

alert(palindromo(texto));
