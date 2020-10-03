let numero = parseInt(window.prompt("Escribe un número"));

let resultado = esPar(numero);

if (resultado === "par") {
    window.alert("El número es par");
} else {
    window.alert("El número es impar");
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return ("par");
    } else {
        return ("impar");
    }
}
