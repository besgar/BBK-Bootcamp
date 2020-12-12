class Cifras{
    /*Clase que crea un número */
    constructor(numero){
        this.numero=numero;
    }

    esPar(){
        if(this.numero%2===0){
            console.log("El número es par");
        }else{
            console.log("El número es impar");
        }
    }

    /*Suma de los dígitos que nos pasan*/
    sumaDigitos(){
        let suma=0; /*Creamos una variable y la igualamos a 0*/
        let numeroString=this.numero.toString(); /*En esta variable, guardamos el numero que tenemos en el "constructor" en formato string*/
        for (let i=0; i<numeroString.length; i++){/*Con un bucle for, recorremos ese string*/
            suma+=parseInt(numeroString.substring(i, i+1))
        }
        console.log(suma);
    }
}


let numero=new Cifras(4)
numero.esPar() /*Estamos llamando a la "función esPar" que está dentro del objeto "número" */

let numero2=new Cifras(3)
numero2.esPar()

let numero3=new Cifras(333)
numero3.sumaDigitos();

