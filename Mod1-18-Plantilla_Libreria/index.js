function dameLibros(){

    let url="http://openlibrary.org/search.json?q="+document.getElementById("buscador").value;

    let libros="";

    fetch(url).then(function recibirRespuesta(respuesta){
       return respuesta.json();
    }).then(function cogerLibros(datos){
         for(let i=0; i<datos.docs.length; i++){
                    if (typeof datos.docs[i].isbn !== 'undefined' && typeof datos.docs[i].author_name !== 'undefined' && typeof datos.docs[i].title !== 'undefined') 
                        {
                        console.log(i)
                        let isbn=datos.docs[i].isbn[0];
                       libros= libros+
                       `<div class="mainBuscadorGnral">
                           <div class="libroCard">
                           <div class="iconoCorazon">
                               <img onmouseout="this.src='./img/icono_corazon_vacio.svg';" onmouseover="this.src='./img/icono_corazon_relleno.svg';" onclick="guardarFavoritos(${isbn})" src="./img/icono_corazon_vacio.svg" alt="icono corazon"/>
                           </div>
                           <img src='http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg' alt="portada libro"/>
                           <div class="libroTituloAutorIsbn">
                               <div>
                                   <h4 class="tituloLibro">${datos.docs[i].title}</h4>
                                   <p>${datos.docs[i].author_name[0]}</p>
                               </div>
                               <p class="isbn">ISBN ${datos.docs[i].isbn[0]}</p>
                           </div>
                           </div>
                       </div>`;
                        }
                    }
        document.getElementById("resultadosBusqueda").innerHTML=libros;
    }) 
        .catch(function() {
            window.alert("Ha ocurrido un error al llamar a la API");
        })
    ;

}


function guardarFavoritos(isbn) {
    //lee del localstorage: de momento es un string: "[11111]"
    let misLibrosFavoritos = localStorage.getItem('librosFavoritos');

    //convierte a array: [11111]
    misLibrosFavoritos = JSON.parse(misLibrosFavoritos);


    //si viene con valor
	if (misLibrosFavoritos !== null){
        //si el isbn no existe en el array
		if(misLibrosFavoritos.indexOf(isbn) === -1){
            //añade isbn al array
			misLibrosFavoritos.push(isbn);
        }
        //guarda el ARRAY
		localStorage.setItem('librosFavoritos', JSON.stringify(misLibrosFavoritos));
	}
	else{
		let favoritos=[];
        favoritos.push(isbn);
        console.log("5:" + favoritos );
		localStorage.setItem('librosFavoritos', JSON.stringify(favoritos));
    }
    window.alert("Libro guardado en Mis Favoritos");
}


function leerFavoritos() {
    let misLibrosFavoritos = localStorage.getItem('librosFavoritos');
    misLibrosFavoritos = JSON.parse(misLibrosFavoritos);
    let libros="";
        for (i = 0; i < misLibrosFavoritos.length; i++) {
            libros=libros+`
                <ul class="enlaceIsbnFavorito">
                    <li><a href=./mis_favoritos_detalle.html?isbn=${misLibrosFavoritos[i]}>${misLibrosFavoritos[i]}</a></li>
                </ul>
            `;
        }
    document.getElementById("mainMisFavoritos").innerHTML=libros;
}

function leerLibroFavorito(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let isbnParametro=urlParams.get('isbn');

    if (isbnParametro!==null){

        let url=`http://openlibrary.org/search.json?q="${isbnParametro}`;

        let libros="";

        fetch(url).then(function recibirRespuesta(respuesta){
        return respuesta.json();
        }).then(function cogerLibros(datos){
            for(let i=0; i<datos.docs.length; i++){
                        if (typeof datos.docs[i].isbn !== 'undefined' && typeof datos.docs[i].author_name !== 'undefined' && typeof datos.docs[i].title !== 'undefined') 
                            {
                            console.log(i)
                            let isbn=datos.docs[i].isbn[0];
                        libros= libros+
                        `<div class="mainBuscadorGnral">
                            <div class="libroCard">
                            <div class="iconoCorazon">
                                <img onmouseout="this.src='./img/icono_corazon_vacio.svg';" onmouseover="this.src='./img/icono_corazon_relleno.svg';" onclick="guardarFavoritos(${isbn})" src="./img/icono_corazon_vacio.svg" alt="icono corazon"/>
                            </div>
                            <img src='http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg' alt="portada libro"/>
                            <div class="libroTituloAutorIsbn">
                                <div>
                                    <h4 class="tituloLibro">${datos.docs[i].title}</h4>
                                    <p>${datos.docs[i].author_name[0]}</p>
                                </div>
                                <p class="isbn">ISBN ${datos.docs[i].isbn[0]}</p>
                            </div>
                            </div>
                        </div>`;
                            }
                        }
            document.getElementById("mainMisFavoritos").innerHTML=libros;
        });
    }
}
