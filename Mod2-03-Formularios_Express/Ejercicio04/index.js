const { response } = require("express");
const express=require("express");
const app=express();

let animales=[
    {
        nombre: "Piolín",
        edad: 2,
        tipo: "pájaro"
    },
    {
        nombre: "Silvestre",
        edad: 8,
        tipo: "gato"
    },
    {
        nombre: "Porky",
        edad: 6,
        tipo: "cerdo"
    }
];

app.get("/", function(request, response){
    let mostrarAnimales="";
    for(let i=0; i<animales.length; i++){
        mostrarAnimales+=`
            <h2>Nombre: ${animales[i].nombre}</h2>
            <p>Edad: ${animales[i].edad}</p>
            <p>Tipo: ${animales[i].tipo}</p>
        `;
    };
    response.send(mostrarAnimales);
});


app.get("/sumar-animal", function(request, response){
    let nombre=request.query.nombre;
    let edad=request.query.edad;
    let tipo=request.query.tipo;

    let animal={
        nombre: nombre,
        edad: edad,
        tipo: tipo
    };
    animales.push(animal);
    response.send("Animal añadido");
});


app.get("/dejar-animal", function(request, response){
    let formulario= `
        <form action="/sumar-animal">	
            <input placeholder="nombre" type="text" name="nombre">
            <input placeholder="edad" type="text" name="edad">
            <input placeholder="tipo" type="text" name="tipo">
            <button type=“submit”>Enviar</button>
        </form>
    `;
    response.send(formulario);
});


app.get("/adoptar", function(request, response){
    let boolean=false;
    let nombre=request.query.nombre;
    for(let i=0; i<animales.length; i++){
        if(nombre===animales[i].nombre){
            animales.splice(i,1);
            boolean=true;
            response.send("El animal con ese nombre se ha eliminado de la lista");
        }
    };
    boolean ? response.send("El animal con ese nombre se ha eliminado de la lista") : response.send("El animal con ese nombre no existe");
});


app.listen(3000);