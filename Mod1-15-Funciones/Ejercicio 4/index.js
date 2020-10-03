let numero1=parseInt(window.prompt("Escribe un número"));
let numero2=parseInt(window.prompt("Escribe otro número"));

let resultado=sumar(numero1,numero2);

function sumar(num1,num2){
    return num1+num2;
}

console.log(resultado);