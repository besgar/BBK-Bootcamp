fetch("/personas")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    })
    .then(function cogerDatos(datos){
        let mostrarPersonas="";
        for(let i=0; i<datos.length; i++){
            mostrarPersonas+=`
                <h3>${datos[i].nombre} ${datos[i].apellidos}</h3>
                <p>Edad: ${datos[i].edad}</p>
            `;
        };
    document.getElementById("div1").innerHTML=mostrarPersonas;
    console.log(datos);
});