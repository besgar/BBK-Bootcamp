let array=[];

let parrafos="";

for(let i=0; i<3; i++){
    array.push(window.prompt("Escribe 1 string"));
}

parrafos=parrafos+`<p>Segundo string escrito por el usuario: ${array[1]}</p>`;
parrafos=parrafos+`<p>Tercer string escrito por el usuario: ${array[2]}</p>`;
parrafos=parrafos+`<p>Primer string escrito por el usuario: ${array[0]}</p>`;

document.getElementById("div1").innerHTML=parrafos;