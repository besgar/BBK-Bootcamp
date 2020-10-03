let array=[];

let div1=document.getElementById("div1");

for(let i=0; i<3; i++){
    array.push(window.prompt("Escribe un valor"));
}

if(array[0]<array[1] && array[0]<array[2]){
    div1.innerHTML=`<p>El más pequeño de los 3 números introducidos es ${array[0]}</p>`;
}else if(array[1]<array[0] && array[1]<array[2]){
    div1.innerHTML=`<p>El más pequeño de los 3 números introducidos es ${array[1]}</p>`;
}else if(array[2]<array[0] && array[2]<array[1]){
    div1.innerHTML=`<p>El más pequeño de los 3 números introducidos es ${array[2]}</p>`;
}