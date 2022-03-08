var valores = [true, 5, false, "hola", "adios", 2];

if(valores[3].length > valores[4].length) {
    console.log(valores[3] + " es mas largo");
} else {
    console.log(valores[4] + " es mas largo")
}

console.log(valores[0] + " " + valores[2]);

console.log("Operaciones matematicas con los valores numericos del array:\n" +
(valores[1] + valores[5]) + "\n" +
(valores[1] - valores[5]) + "\n" +
(valores[1] * valores[5]) + "\n" +
(valores[1] / valores[5]) + "\n" +
(Math.pow(valores[1], valores[5])));