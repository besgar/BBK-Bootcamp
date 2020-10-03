let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let respuesta=parseInt(window.prompt("Introduce un número del 1 al 12"));

let parrafo;

for(let i=0; i<meses.length; i++){
    if(i+1===respuesta){
        parrafo=`<p>${meses[i]}</p>`;
    }
}

document.getElementById("div1").innerHTML=parrafo;
