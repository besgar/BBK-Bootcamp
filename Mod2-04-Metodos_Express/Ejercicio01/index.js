const express=require("express");
const app=express();

app.use(express.static("public"));

let personas=[
    {
        nombre:"Elena",
        apellidos: "Bestilleiro García",
        edad: 37
    },
    {
        nombre:"Óscar",
        apellidos: "Núñez Bermejo",
        edad: 37
    },
    {
        nombre:"Haizea",
        apellidos: "Núñez Bestilleiro",
        edad: 2
    }
];


app.get("/personas", function(request, response){
    response.send(personas);
});

app.listen(3000);