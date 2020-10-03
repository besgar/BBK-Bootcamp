let array=[];

let suma=0;

let media;

let mensaje;

for(let i=0; i<20; i++){
    array.push(Math.floor(Math.random()*(36-18)+18));
}

for(let i=0; i<array.length; i++){
    suma=suma+array[i];
}

media=suma/array.length;

mensaje=`<p>La edad media de la clase es: ${media}</p>`;

document.getElementById("div1").innerHTML=mensaje;