var numVeces = prompt("Cuantas veces quieres que se lancen los dados?");
var suma = 0;

var arraySumas = new Array(numVeces);
var dado1;
var dado2;

for (let index = 0; index < numVeces; index++) {
  dado1 = lanzarDados();
  dado2 = lanzarDados();
  suma = dado1 + dado2;
  arraySumas[index] = suma;
}

function lanzarDados() {
  var numRandom = (Math.trunc(Math.random() * (6 - 1) + 1));
  return numRandom;
}

console.log(arraySumas);
