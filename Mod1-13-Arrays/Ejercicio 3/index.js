let array=[];

let parrafos="";

for(let i=20; i>10; i--){
    array.push(i);
}

for(let i=0; i<array.length; i++){
    parrafos=parrafos+`<p>${array[i]}</p>`;
}

document.getElementById("div1").innerHTML=parrafos;