let numero = parseInt(window.prompt("Escribe un número"));

if (numero < 0) {
    window.alert("Tienes que introducir un número positivo");
} else {
    let resultado = numerodigitos(numero);
    window.alert("Número de dígitos: " + resultado);
}


function numerodigitos(numero) {
    let longitud = numero.toString().length;
    return longitud;
}
