let div1=document.getElementById("div1");

let operacion=window.prompt("¿Qué operación deseas realizar: suma, resta, multiplicacion, division o resto?");
operacion=operacion.toLowerCase();

let numero1=parseInt(window.prompt("Escribe un número"));
let numero2=parseInt(window.prompt("Escribe otro número"));

let suma=numero1+numero2;
let resta=numero1-numero2;
let multiplicacion=numero1*numero2;
let division=numero1/numero2;
let resto= numero1%numero2;

if(operacion==="suma"){
    div1.innerHTML=`<button onclick='window.alert(suma)'>Suma</button>`;
}else if(operacion==="resta"){
    div1.innerHTML=`<button onclick='window.alert(resta)'>Resta</button>`;
}else if(operacion==="multiplicacion"){
    div1.innerHTML=`<button onclick='window.alert(multiplicacion)'>Multiplicación</button>`;
}else if(operacion==="division"){
    div1.innerHTML=`<button onclick='window.alert(division)'>División</button>`;
}else if(operacion==="resto"){
    div1.innerHTML=`<button onclick='window.alert(resto)'>Resto</button>`;
}
