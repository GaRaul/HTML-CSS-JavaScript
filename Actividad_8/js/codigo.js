var num = prompt("Introduce un numero entero")

function parImpar(num){
    if(num%2 == 0) {
        return "El numero " + num + " es par"
    } else {
        return "El numero " + num + " es impar"
    }
}

alert(parImpar(num))