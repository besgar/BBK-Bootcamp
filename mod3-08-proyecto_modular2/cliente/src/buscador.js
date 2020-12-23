import {useEffect, useState, useParams} from "react";


function Buscador(){
    const [text,setText]=useState("");
    const [dificultad,setDificultad]=useState("");
    const [plato, setPlato]=useState("");


    function manageChange(event){
        setText(event.target.value);
    };


    function buscarNombre(){
        fetch("http://localhost:3001/recetas/buscarpalabra/" + text).then(function(res){
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
            document.getElementById("mostrarRecetasBuscadas").innerHTML=recetas;
        });
    };
     

    function handleChange(event){
        setDificultad(event.target.value);
    };


    function buscarDificultad() {
        fetch("http://localhost:3001/recetas/buscardificultad/" + dificultad).then(function(res){
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
            document.getElementById("mostrarRecetasBuscadas").innerHTML=recetas;
        });
    };
 

    function handleChange(event){
        setPlato(event.target.value);
    };


    function buscarPlato(){
        fetch("http://localhost:3001/recetas/buscarplato/" + plato).then(function(res){
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
            document.getElementById("mostrarRecetasBuscadas").innerHTML=recetas;
        });
    };
        
    return (
        <main>
            <h2 class="tituloMain">BUSCADOR</h2>

            <h3 class="subtitulo">¿Qué te apetece cocinar?</h3>
            <p id="parrafoBuscador">Tienes tres opciones para realizar tu búsqueda, escoge la que más se adecue a lo que quieres.</p>

            <div id="mainUsuario">                  
                <div id="buscarReceta">    
                    <div class="crearRecetaInputs">
                        <input type="text" value={text} onChange={manageChange} placeholder="Nombre del plato" id="nombreBuscar"/>
                        <button class="boton" onClick={buscarNombre}>BUSCAR</button>
                    </div>

                    <div class="lineaSeparacion"></div>

                    <div class="crearRecetaInputs">
                        <select onChange={handleChange} name="dificultad" id="dificultad">
                            <option value="baja">Dificultad Baja</option>
                            <option value="media">Dificultad Media</option>
                            <option value="alta">Dificultad Alta</option>
                        </select>
                        <button class="boton" onClick={buscarDificultad}>BUSCAR</button>
                    </div>

                    <div class="lineaSeparacion"></div>

                    <div class="crearRecetaInputs">
                        <select onChange={handleChange} name="plato" id="platoBuscar">
                            <option value="entrante">Entrante</option>
                            <option value="primero">Primero</option>
                            <option value="segundo">Segundo</option>
                            <option value="postre">Postre</option>
                        </select>
                        <button class="boton" onClick={buscarPlato}>BUSCAR</button>
                    </div>
                    <div>
                        <img src="./img/cocinar.png" alt="imagen_cocinar"/>
                    </div>  
                </div>
            </div>
            
            <div id="mostrarRecetasBuscadas"></div>

        </main>
    )
}

export default Buscador;