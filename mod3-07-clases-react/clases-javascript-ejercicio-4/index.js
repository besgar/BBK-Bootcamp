class Finanzas{
    constructor(moneda){
        this.moneda=moneda;
    }

    dolaresToEuros(){
        console.log(this.moneda*0.83)
    }

    eurosToDolares(){
        console.log(this.moneda/0.83)
    }

}


/*Llamamos a la función que hemos creado */
let conversor=new Finanzas(8)
conversor.dolaresToEuros();
conversor.eurosToDolares();
