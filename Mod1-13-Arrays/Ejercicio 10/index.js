let array=[0,0,0,0,0,0,0,0,0,0,0,];

let num;

let parrafos="";

do{
    num=parseInt(window.prompt("Escribe un número del 0 al 11"));
    if(num>=0 && num<=11){
        array[num]=array[num]+1;
        document.getElementById("div1").innerHTML=`<p>El valor es ${array[num]}</p>`;
    }else if(num>11){
        document.getElementById("div1").innerHTML=`<p>El número está fuera de rango</p>`;
    }else{
        for(let i=0; i<array.length; i++){
            parrafos=parrafos+`<p>${i}----${array[i]}</p>`
        }
        document.getElementById("div1").innerHTML=parrafos;
    }
}while(num>=0);