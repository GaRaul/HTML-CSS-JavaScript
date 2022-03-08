var texto = prompt("Introduce un texto");

function minusMayus(texto){

    if(texto == texto.toUpperCase()) {
        return "La cadena solo tiene mayusculas"
    } else if (texto == texto.toLowerCase()) {
        return "La cadena solo tiene minusculas"
    } else {
        return "La cadena tiene tanto mayusculas como minusculas"
    }
    
}

 alert(minusMayus(texto));