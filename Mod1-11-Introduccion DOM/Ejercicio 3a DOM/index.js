let div1=document.getElementById("div1");

let nombre=window.prompt("¿Cómo te llamas?");
let edad=window.prompt("¿Cuántos años tienes?");

if(edad<18){
    div1.innerHTML=`Hola ${nombre}, eres menor de edad`;
}
else{
    div1.innerHTML=`Hola ${nombre}, eres mayor de edad`;
}


