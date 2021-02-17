import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'reactstrap';
import React from 'react';
import { Helmet } from 'react-helmet';


function InsigniasAsignadas(){
    const [insigniaAsignada, setInsigniaAsignada] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/sentbadgets3/elenabestilleiro@gmail.com/")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setInsigniaAsignada(res)
        });
    },[]);

    const iterableResponse = Object.values(insigniaAsignada);
    console.log(insigniaAsignada);
    console.log(iterableResponse);


    const mostrarInsigniasAsignadas = iterableResponse.map(function(insignia){
        if(insignia.insignias_restantes === insignia.insignias_totales){
            return(
                <>
                    <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                        <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src={insignia.imagen}/>
                        <blockquote className="blockquote"><h6 class="text-center">{insignia.nombre_insignia}</h6></blockquote>
                        <blockquote className="blockquote_InsigniasAsignadas_Ninguna"><h6 class="text-center">Te quedan: {insignia.insignias_restantes} / {insignia.insignias_totales}</h6></blockquote>          
                    </div>
                </>
            );
        }else{
            return(
                <>
                    <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                        <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src={insignia.imagen}/>
                        <blockquote className="blockquote"><h6 class="text-center">{insignia.nombre_insignia}</h6></blockquote>
                        <blockquote className="blockquote_InsigniasAsignadas"><h6 class="text-center">Te quedan: {insignia.insignias_restantes} / {insignia.insignias_totales}</h6></blockquote>               
                        <div className="btnNumeroInsignia">
                            
                            <Link to={"/sentbadgets/who/given/" + insignia.nombre_insignia} >
                                <Button className="btn-round btn-icon" color="primary" outline><h6>¿A quién?</h6></Button>
                            </Link>
                        </div> 

                    </div>
                </>
            );
        }
        
    });

    return (
        <>
            <Helmet>
                <title>deserve · U | Insignias asignadas</title>
            </Helmet>

            <div>
                <p className="subtitulosH3" style={{paddingTop:'38px'}}>·· Insignias asignadas ··</p>
            </div> 

            <div className="mostrarInsignias">
                {mostrarInsigniasAsignadas}
            </div>

        </>
    );
}

export default InsigniasAsignadas;