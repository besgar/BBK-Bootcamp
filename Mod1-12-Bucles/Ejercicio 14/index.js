let numero = window.prompt("Escribe un número entero");

let asterisco = "*";

let resultado="";


for (let i = 0; i<numero; i++) {
  resultado=resultado + `<p>${asterisco}</p>`;
  asterisco=asterisco + "*";
}

document.getElementById("div1").innerHTML=resultado;