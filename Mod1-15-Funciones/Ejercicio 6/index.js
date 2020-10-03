do {
    let numero1 = parseInt(window.prompt("Escribe un número"));
    let numero2 = parseInt(window.prompt("Escribe otro número"));

    resultado = divide(numero1, numero2);

    window.alert(resultado);
} while (numero2 !== 0);


function divide(num1, num2) {
    let division = num1 / num2;
    return division;
}
