let array=[1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let num;

let mensaje="";

do{
    num=parseInt(window.prompt("Escribe un número del 0 al 9"));
    if(num>=0 && num<=9){
        document.getElementById("div1").innerHTML=`<p>El valor es ${num}</p>`;
        array[num]=array[num]*2;
    }else{
        document.getElementById("div1").innerHTML=`<p>El número elegido está fuera de rango</p>`;
    }
}while (num>=0 && num<=9);

for(let i=0; i<array.length; i++){
    mensaje=mensaje + `<p>${i}----${array[i]}</p>`;
}

document.getElementById("div1").innerHTML=mensaje;