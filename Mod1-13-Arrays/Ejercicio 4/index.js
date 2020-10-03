let array=[];

let parrafo="";

for (let i=0; i<10; i++){
    array.push(window.prompt("Introduce una palabra"));
}

for (let i=0; i<array.length; i++){
    parrafo=parrafo+`<p>${array[i]}</p>`
}

document.getElementById("div1").innerHTML=parrafo;