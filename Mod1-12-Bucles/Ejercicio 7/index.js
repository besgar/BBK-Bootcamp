let valor;

let sumaValores=0;

while(valor!==0){
    valor=parseInt(window.prompt("Introduce un número"));

    if(valor<0){
        console.log("El número introducido es negativo");
    } else{
        sumaValores=sumaValores+valor;
    }
}

console.log(`La suma de los números introducidos es ${sumaValores}`);