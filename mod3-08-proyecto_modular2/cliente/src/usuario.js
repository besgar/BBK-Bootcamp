import {useEffect, useState} from "react";

function Usuario (){
    /*Nada mas cargarse la página, muestras las recetas que tiene el usuario en su zona de usuario*/
    useEffect(()=>{
        fetch("http://localhost:3001/recetas/usuario").then(function(res){
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
    },[]);

    
    /*COMIENZA: Añadir receta*/
    const [nombre,setNombre]=useState("");
    function manageChangeNombre(event){
        setNombre(event.target.value);
    };

    const [pelicula,setPelicula]=useState("");
    function manageChangePelicula(event){
        setPelicula(event.target.value);
    };

    const [trailer,setTrailer]=useState("");
    function manageChangeTrailer(event){
        setTrailer(event.target.value);
    };

    const [enlace,setEnlace]=useState("");
    function manageChangeEnlace(event){
        setEnlace(event.target.value);
    };

    const [tiempo,setTiempo]=useState("");
    function manageChangeTiempo(event){
        setTiempo(event.target.value);
    };

    const [comensales,setComensales]=useState("");
    function manageChangeComensales(event){
        setComensales(event.target.value);
    };

    const [usuario,setUsuario]=useState("");
    function manageChangeUsuario(event){
        setUsuario(event.target.value);
    };

    const [dificultad,setDificultad]=useState("");
    function handleChangeDificultad(event){
        setDificultad(event.target.value);
    };

    const [plato,setPlato]=useState("");
    function handleChangePlato(event){
        setPlato(event.target.value);
    };

    function anyadir() {
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
        console.log(recetaInsertar);
        fetch("http://localhost:3001/recetas/nuevaReceta",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recetaInsertar),
        }).then(function(res){
            return res.json();
        }).then(function(datos){
            console.log(datos);
            // recibirRecetasUsuario();
        });
    };
    /*FIN: Añadir receta*/

    return (
        <main>
        <h2 class="tituloMain">ZONA PRIVADA</h2>

        <div id="cerrarSesion">
            <div id="iconoCerrarSesion">
                <img src="./img/icono_cerrar_sesion.png" alt="icono_cerrar_sesion"/>
            </div>
            <div id="textoCerrarSesion">
                <h4>CERRAR SESIÓN</h4>
            </div>
        </div>

        <h3 class="subtitulo">¡Quiero crear una nueva receta!</h3>

        <div id="mainUsuario">
            <div id="crearReceta">          
                <div class="crearRecetaInputs">
                    <input type="text" value={nombre} onChange={manageChangeNombre} placeholder="Nombre del plato" id="nombre"/>
                    <input type="text" value={pelicula} onChange={manageChangePelicula} placeholder="Título de la película" id="pelicula"/>
                    <input type="text" value={trailer} onChange={manageChangeTrailer} placeholder="Enlace al argumento de la película" id="trailer"/>
                </div>
                <div class="crearRecetaInputs">
                    <input type="text" value={enlace} onChange={manageChangeEnlace} placeholder="Enlace a Youtube" id="enlace"/>
                    <input type="text" value={tiempo} onChange={manageChangeTiempo} placeholder="Tiempo (horas)" id="tiempo"/>
                    <input type="text" value={comensales} onChange={manageChangeComensales} placeholder="Comensales" id="comensales"/>
                </div>
                <div class="crearRecetaInputs">
                    <select onChange={handleChangeDificultad} name="dificultad" id="dificultad">
                        <option value="baja">Dificultad Baja</option>
                        <option value="media">Dificultad Media</option>
                        <option value="alta">Dificultad Alta</option>
                    </select>
                    <select onChange={handleChangePlato} name="plato" id="plato">
                        <option value="entrante">Entrante</option>
                        <option value="primero">Primero</option>
                        <option value="segundo">Segundo</option>
                        <option value="postre">Postre</option>
                    </select>
                    <input type="text" value={usuario} onChange={manageChangeUsuario} placeholder="Escrito por..." id="usuario"/>
                    <button class="boton" onClick={anyadir}>AÑADIR</button>
                </div>
                <div>
                    <img src="./img/vegetales.png" alt="imagen_vegetales"/>
                </div>  
            </div>
        </div>
        
        <h3 class="subtitulo">Echa un vistazo a las recetas que has creado</h3>

        <div id="recetasMostrarUsuario"></div>

    </main>
    );
}

export default Usuario;