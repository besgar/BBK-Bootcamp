let numero=parseInt(window.prompt("Escribe un número"));

document.getElementById("div1").innerHTML=`${numero}`;

if(numero<100){
    document.getElementById("div1").style.color="green";
}else if(numero>=100 && numero<200){
    document.getElementById("div1").style.color="yellow";
}else{
    document.getElementById("div1").style.color="red";
}