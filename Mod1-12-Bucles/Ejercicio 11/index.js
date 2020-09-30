let numero;
let numeroInvertido="";

do{
    numero=window.prompt("Escribe un número con varios dígitos");
    let x= numero.length;

    while(x>=0){
        numeroInvertido = numeroInvertido + numero.substring(x-1,x);
        x--;
    }
    console.log(numeroInvertido);
    numeroInvertido="";
}while(numero!=="0");