class Distancia{
    constructor(numero){
        this.numero=numero;
    }

    millasAMetros(){
        const metro=1609.34;
        let metros=this.numero*metro;
        console.log (metros);
    }

    millasAKilometros(){
        const metro=1609.34;
        let kilometro=metro/1000;
        let kilometros=this.numero*kilometro;
        console.log(kilometros);

    }
}


/*Llamamos a la función que hemos creado */
let numeroDef=new Distancia(20)
numeroDef.millasAMetros();
numeroDef.millasAKilometros();