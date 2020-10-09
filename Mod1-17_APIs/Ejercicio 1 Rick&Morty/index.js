let url="https://rickandmortyapi.com/api/character";

let personajes="";

fetch(url).then(function recibirRespuesta(respuesta){
   return respuesta.json();
}).then(function cogerGatos(datos){
    for(let i=0; i<datos.results.length; i++){
        personajes=personajes+`
            <div>
                <img src="${datos.results[i].image}" alt""/>
                <h1>${datos.results[i].name}</h1>
            </div>
        `;
    }
document.getElementById("personajes").innerHTML=personajes;

});

