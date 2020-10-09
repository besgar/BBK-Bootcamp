function fotoDelDia() {

    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anyo = document.getElementById("anyo").value;

    let url = `https://api.nasa.gov/planetary/apod?api_key=7D7Nm20EFOnbRgfpGOd81ffBObbNtXLdH9IcMddq&date=${anyo}-${mes}-${dia}`;

    fetch(url).then(function (respuesta) {
        return respuesta.json();
    }).then(function (datos) {
        document.getElementById("div1").innerHTML = `
        <div>
            <p>Fecha:${datos.date}</p>
            <p>Título: ${datos.title}</p>
            <img src=${datos.url} alt=""/>
            <p>Descripción: ${datos.explanation}</p>
        </div>
    `;
    });
}

