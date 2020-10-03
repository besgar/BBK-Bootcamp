let numero = window.prompt("Escribe un número de 3 dígitos");

let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
}

document.getElementById("div1").innerHTML =`<p>La suma de los valores de ${numero} es: ${suma}</p>`;