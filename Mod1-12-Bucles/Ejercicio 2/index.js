let numero=parseInt(window.prompt("Escribe un número"));

let contador=1;
let suma=0;

while(contador<numero){
    suma=suma + contador;
    contador ++;
    console.log(suma);
}

for (let i=1; i<numero; i++){
    suma = suma + i;
    console.log(suma);
}



