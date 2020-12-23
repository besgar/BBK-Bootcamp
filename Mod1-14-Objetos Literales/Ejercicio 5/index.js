let fecha=window.prompt("Escribe tu fecha de nacimiento");
let nombre=window.prompt("Escribe tu nombre");
let apellido=window.prompt("Escribe tu apellido");
let sexo=window.prompt("¿Quieres el nombre en femenino o en masculino?");

let ultimoFecha=parseInt(fecha.substring(fecha.length-1));
let primeraNombre=nombre.substring(0,1);
let ultimaApellido=apellido.substring(apellido.length-1);

if(primeraNombre=="a")