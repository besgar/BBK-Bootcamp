import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link,useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import React from 'react';
import { Helmet } from 'react-helmet';

function MostrarDetallesContacto(){
    const [detalleContacto, setDetalleContacto] = useState([]);
    const params=useParams();
    const nombreinsignia=params.nombreinsignia;
    let nombreinsig="";

    // console.log(nombreinsignia);

    if(nombreinsignia==="Mejor Madre"){
      nombreinsig="mejor_madre";
    } else if(nombreinsignia==="Mejor Padre"){
      nombreinsig="mejor_padre";
    } else if(nombreinsignia==="Best Friend"){
      nombreinsig="best_friend";
    } else if(nombreinsignia==="Te Quiero"){
      nombreinsig="te_quiero";
    } else if(nombreinsignia==="Como de la familia"){
      nombreinsig="como_de_la_familia";
    } else if(nombreinsignia==="Detallista"){
      nombreinsig="detallista";
    } else if(nombreinsignia==="Luchador"){
      nombreinsig="luchador";
    } else if(nombreinsignia==="Optimista"){
      nombreinsig="optimista";
    } else if(nombreinsignia==="Artista"){
      nombreinsig="artista";
    } else if(nombreinsignia==="En plena forma"){
      nombreinsig="en_plena_forma";
    } else if(nombreinsignia==="Al más trabajador"){
      nombreinsig="al_mas_trabajador";
    } else if(nombreinsignia==="Top"){
      nombreinsig="top";
    }


    useEffect(()=>{
        fetch("http://localhost:3001/sentbadgets3/who/given/elenabestilleiro@gmail.com/" + nombreinsig)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setDetalleContacto(res)
        });
    },[]);

    const iterableResponse = Object.values(detalleContacto);
    console.log(detalleContacto);
    console.log(iterableResponse);

    /*FALTA PONER LA URL DE LA IMG DEL CONTACTO*/
    /*REVISAR XK SE VE LA IMG DELA CONTACTO SI METO UNA URL Y XK NO SE VE SI LA GUARDO DONDE "IMG"*/


    const mostrarDetalleContacto = iterableResponse.map(function(contactoPersona){
      return (
        <>
          <div>
            <Card style={{ width: '300px' }}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Img variant="top" src="http://clouderview.com/hel/bbkboot/contacto.jpg"/>
              <Card.Body>
                <Card.Title>{contactoPersona.nombre} {contactoPersona.apellido}</Card.Title>              
                <small className="text-muted">{contactoPersona.edad} años</small>
                <Card.Text>{contactoPersona.descripcion}</Card.Text>              
                <Button className="btn-round" color="danger" ><i className="nc-icon nc-simple-remove"/> Quitar insignia</Button>
              </Card.Body>
            </Card>
        </div>
        </>
      );
    });

    return (
      <>
        <Helmet>
          <title>deserveU | Insignias asignadas</title>
        </Helmet>
        
        <Link to={"/sentbadgets"}>
          <Button className="btn-round" color="primary" outline><i className="fa fa-arrow-left"/> Volver</Button>
        </Link> 

        <div>
          <h3 class="text-center">NOMBRE INSIGNIA</h3>
        </div>        
        
        <div className="mostrarContactos">
          {mostrarDetalleContacto}
        </div>
      </>
    );

}

export default MostrarDetallesContacto;