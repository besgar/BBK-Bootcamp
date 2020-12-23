import {useEffect} from "react";

function Main(){
    useEffect(()=>{
        fetch("http://localhost:3001/recetas")
        .then((res)=>res.json())
        .then((datos)=>{
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
          document.getElementById("recetasMostrar").innerHTML=recetas;
        });
      },[]);

    return (
        <main>
            <div id="fraseHome">
                <img src="img/frase_home.png" alt="frase_recetas_pelicula"/>
            </div>
            <p id="parrafoHome">¿Quieres cocinar el plato de tu película favorita? ¿Te apetece un plan de sofá, mantita y peli, pero con una buena cena? Gracias a <strong>Ke Aprovexe!!</strong>, descubre las exquisitas recetas inspiradas en el mundo de cine. Cocina los platos icónicos de tus series y películas favoritas: de la hamburguesa de Pulp Fiction al pastel de Juego de Tronos.</p>
            
            <h3 class="subtitulo">¡No te pierdas las últimas recetas añadidas!</h3>
            <div id="recetasMostrar"></div>
        </main>
    );
}

export default Main;