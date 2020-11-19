recibirRecetasUsuario()

function recibirRecetasUsuario(){
    fetch("/recetas/usuario").then(function(res){
        return res.json();
    }).then(function(datos){
        let recetas="";
        let filaCuatroRecetas=1;
        for(let i=0; i<datos.length; i++){
            console.log(filaCuatroRecetas);
            if(filaCuatroRecetas===1){
                recetas+=`
                    <div class="filaCuatroRecetas">
                `;
            }
            recetas+=`
                    <div class="recetaIndividual">
                        <div class="ocultarDiv">${datos[i]._id}</div>
                        <div class="recetaIndividualNombre">                        
                            <h3>${datos[i].nombre}</h3>
                        </div>
                        <div class="recetaIndividualPeli">
                            <div>               
                                <a href="${datos[i].trailer}" target="_blank"><img src="./img/icono_peli.png" alt="logotipo"/></a>
                            </div>
                            <div>                        
                                <a href="${datos[i].trailer}" target="_blank"><h5>${datos[i].pelicula}</h5></a>
                            </div>
                        </div>
                        <iframe class="videoResponsive" width="314" height="240" src="${datos[i].enlace}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        
                        <div id="recetaTCDMain">
                            <div class="recetaTCD">
                                <div class="recetaTCDIcono">
                                    <img src="./img/icono_tiempo.png" alt="icono_tiempo"/>
                                </div>
                                <p>${datos[i].tiempo} h.</p>
                            </div>
                            <div class="recetaTCD">
                                <div class="recetaTCDIcono">
                                    <img src="./img/icono_comensales.png" alt="icono_comensales"/>
                                </div>
                                <p>${datos[i].comensales} px.</p>
                            </div>
                            <div class="recetaTCD">
                                <div class="recetaTCDIcono">
                                    <img src="./img/icono_dificultad.png" alt="icono_dificultad"/>
                                </div>
                                <p>Dificultad ${datos[i].dificultad}</p>
                            </div>
                        </div>
                        <div class="recetaPlatoUsuario">
                            <div class="recetaPlato">
                                <p><strong>${datos[i].plato}</strong></p>
                            </div>
                            <div class="recetaUsuario">
                                <div class="recetaEditarBorrar">
                                    <div class="recetaEditarBorrarIcono">
                                    <a href="./usuario_editar.html?id=${datos[i]._id}" target="_blank"><img src="./img/icono_editar.png" alt="icono_editar"/></a>
                                    </div>
                                    <div class="recetaEditarBorrarIcono">
                                       <button onclick="eliminar('${datos[i]._id}')" id="borrarReceta"><img src="./img/icono_borrar.png" alt="icono_borrar"/></button>
                                    </div>
                                </div>
                                <p><strong>By:</strong> ${datos[i].usuario}</p>
                            </div>
                        </div>
                    </div>
            `;

            if(filaCuatroRecetas%4===0){
                recetas+=`
                    </div>
                `;
                filaCuatroRecetas=1;
            }         
            else   {
                filaCuatroRecetas+=1;
            }   
        }
        document.getElementById("recetasMostrarUsuario").innerHTML=recetas;
    });
};


function anyadir(){
    const nombre=document.getElementById("nombre").value;
    const pelicula=document.getElementById("pelicula").value.toUpperCase();
    const trailer=document.getElementById("trailer").value;
    const enlace=document.getElementById("enlace").value;
    const tiempo=document.getElementById("tiempo").value;
    const comensales=parseInt(document.getElementById("comensales").value);
    const dificultad=document.getElementById("dificultad").value;
    const plato=document.getElementById("plato").value;
    const usuario=document.getElementById("usuario").value;

    const recetaInsertar={
        nombre,
        pelicula,
        trailer,
        enlace,
        tiempo,
        comensales,
        dificultad,
        plato,
        usuario
    };

    fetch("/recetas/nuevaReceta",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recetaInsertar),
    }).then(function(res){
        return res.json();
    }).then(function(datos){
        console.log(datos);
        recibirRecetasUsuario();
    });
};



function eliminar(id){
    fetch(`/recetas/borrarReceta/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    }).then(function(res){
        return res.json();
    }).then(function(datos){
        console.log(datos);
        window.alert("La receta se ha borrado correctamente");
        recibirRecetasUsuario();
    });
};

