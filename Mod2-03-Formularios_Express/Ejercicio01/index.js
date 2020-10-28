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

app.listen(3000);