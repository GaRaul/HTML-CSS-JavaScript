var num = prompt("Introduce un numero entero");
var factorial = 1;

for (let index = 1; index <= num; index++) {
    factorial *= index;
    
}

alert("El factorial de " + num + " es = " + factorial);