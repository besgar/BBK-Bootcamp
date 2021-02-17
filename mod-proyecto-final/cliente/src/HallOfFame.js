import {BrowserRouter, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'reactstrap';
import React from 'react';
import { Helmet } from 'react-helmet';
import HallOfFameShare from "HallOfFameShare";

{/* <div class="mr-center ml-center col-sm-3 col-md-2"></div> */}

function HallOfFame(){
    const [insigniasRecibidas, setInsigniasRecibidas] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:3001/halloffame3/elenabestilleiro@gmail.com")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setInsigniasRecibidas(res)
        });
    },[]);


    const iterableResponse = Object.values(insigniasRecibidas);
    console.log(insigniasRecibidas);
    console.log(iterableResponse);

    /*FALTA PONER LA URL DE LA IMG DE LA INSIGNIA*/

    const mostrarInsigniasRecibidas = iterableResponse.map(function(insignia){
        console.log(insignia)
        return(
            <>
                {/* <div class="mr-center ml-center p-5 col-sm-3 col-md-2"> */}
                <div class="mr-center ml-center p-4 col-sm-3 col-md-2">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src={insignia.imagen}/>
                    <div className="blockquoteHallOfFame"><h6>{insignia.nombre_insignia}</h6></div>               
                    <div className="btnnumeroInsignias_HallOfFame">
                        <Link to={"/halloffame/who/" + insignia.nombre_insignia} className="numeroInsignia_HallOfFame">
                            <Button className="btn-round btn-icon" color="primary"><h6>{insignia.insignias_recibidas}</h6></Button>
                        </Link>                
                    </div>
                </div>
            </>
        );
    });


    return(
        <>
            <Helmet>
                <title>deserve · U | Hall of Fame</title>
            </Helmet>

            <div className="bg_HallofFame">

                <div class="col-lg-6 mx-auto">
                    <h1 class="font-weight-bold text-center titulo_h1_HallOfFame" ><i class="fa fa-star titulo_iconoEstrella2_HallOfFame"></i><i class="fa fa-star fa-1x titulo_iconoEstrella_HallOfFame"></i>  Hall of Fame  <i class="fa fa-star fa-1x titulo_iconoEstrella4_HallOfFame"></i><i class="fa fa-star titulo_iconoEstrella3_HallOfFame"></i></h1>
                </div>    

                <p class="text-muted text-center col-lg-6 mx-auto">¡Hola <span style={{fontWeight:'600'}}>Elena!</span> ¿Qué tal?¡Qué alegría verte por aquí de nuevo, bienvenida! Echa un vistazo a tu "Hall of Fame", seguro que tienes alguna insignia nueva.</p>
                
                {/* <hr/> */}
                
                <div>
                    <div className="mostrarInsignias_HallofFame">
                        {mostrarInsigniasRecibidas}
                    </div>  
                    
                     
                </div> 
                
                <HallOfFameShare/>

            </div>

  

        </>
    );
}

export default HallOfFame;