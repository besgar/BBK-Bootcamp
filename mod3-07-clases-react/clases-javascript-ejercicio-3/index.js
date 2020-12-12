class Rectangulo{
    constructor(base, altura){
        this.base=base;
        this.altura=altura;
    }

    calcularArea(){
        let area=this.base*this.altura;
        console.log(area);
    }

    calcularPerimetro(){
        let perimetro=this.base*2 + this.altura*2;
        console.log(perimetro);
    }
}


/*Llamamos a la función que hemos creado */
const rectangulo=new Rectangulo(2,7)
rectangulo.calcularArea();
rectangulo.calcularPerimetro();