let div1=document.getElementById("div1");

let nombre=window.prompt("¿Cómo te llamas?");
let edad=window.prompt("¿Cuántos años tienes?");

div1.innerHTML=edad<=18 ? `Hola ${nombre}, eres menor de edad` : `Hola ${nombre}, eres mayor de edad`;


