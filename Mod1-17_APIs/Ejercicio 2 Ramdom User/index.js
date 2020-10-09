fetch("https://randomuser.me/api/")
    .then(function cogerRespuesta(respuesta) {
        return respuesta.json();
    })
    .then(function cogerDatos(datos) {
        let persona = `
        <div>
            <img src=${datos.results[0].picture.medium} alt=""/>
            <p>Nombre:${datos.results[0].name.title} ${datos.results[0].name.first} ${datos.results[0].name.last}</p>
            <p>Email: ${datos.results[0].email}</p>
            <p>Dirección: ${datos.results[0].location.street.name} ${datos.results[0].location.street.number}</p>
            <p>City: ${datos.results[0].location.city}</p>
            <p>State: ${datos.results[0].location.state}</p>
            <p>Country: ${datos.results[0].location.country}</p>
            <p>Código Postal: ${datos.results[0].location.postcode}</p>
        </div>
    `;
    document.getElementById("persona").innerHTML=persona;
    });
