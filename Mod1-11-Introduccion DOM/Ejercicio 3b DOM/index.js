let div1=document.getElementById("div1");

let nombre=window.prompt("¿Cómo te llamas?");
let edad=window.prompt("¿Cuántos años tienes?");

switch(edad){
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
        div1.innerHTML=`Hola ${nombre}, eres menor de edad`;
    break;

    default:
        div1.innerHTML=`Hola ${nombre}, eres mayor de edad`;
  
}


