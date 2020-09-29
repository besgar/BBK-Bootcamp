let numero1=parseInt(window.prompt("Escribe un número"));
let numero2=parseInt(window.prompt("Escribe otro número"));

let suma=document.getElementById("suma");
suma.style.color="yellow";
suma.style.background="purple";
suma.innerHTML=numero1+numero2;

let resta=document.getElementById("resta");
resta.style.color="orange";
resta.style.background="blue";
resta.innerHTML=numero1-numero2;

let multiplicacion=document.getElementById("multiplicacion");
multiplicacion.style.color="white";
multiplicacion.style.background="black";
multiplicacion.innerHTML=numero1*numero2;

let division=document.getElementById("division");
division.style.color="blue";
division.style.background="yellow";
division.innerHTML=numero1/numero2;

let resto=document.getElementById("resto");
resto.style.color="white";
resto.style.background="pink";
resto.innerHTML=numero1%numero2;