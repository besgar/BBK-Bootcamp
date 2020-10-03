let numero1 = parseInt(window.prompt("Escribe un número"));
let numero2 = parseInt(window.prompt("Escribe otro número"));

let esMayor = mayorMenor(numero1, numero2);

function mayorMenor(numero1, numero2) {
    if (numero1 > numero2) {
        return true;
    } else {
        return false;
    }
}

esMayor
    ? console.log("El primer número es más grande") :
    console.log("El primer número no es más grande");
