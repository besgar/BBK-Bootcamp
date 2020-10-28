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
});

app.listen(3000);