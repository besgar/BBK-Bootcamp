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

    // const emailContacto=params.email;
    const [insigniasAsignadas, setInsigniasAsignadas] = useState([]);


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
        console.log("2");
          console.log(res);
          setDetalleContacto(Object.values(res))
      });
  },[]);


  
    // const iterableResponse = Object.values(detalleContacto);
    console.log(detalleContacto);
    // console.log(iterableResponse);

    /*FALTA PONER LA URL DE LA IMG DEL CONTACTO. REVISAR XK SE VE LA IMG DELA CONTACTO SI METO UNA URL Y XK NO SE VE SI LA GUARDO DONDE "IMG"*/

    const mostrarDetalleContacto = detalleContacto.map(function(contactoPersona){
      console.log(contactoPersona)

      let imagen="../../../" + contactoPersona.imagen;

      return (
        <>
          <div className="mostrarContactosIndiv">
            <Card style={{ width: '300px' }}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Img variant="top" src={imagen}/>
              <Card.Body>
                <Card.Title><p className="mostrarNombre_contacto">{contactoPersona.nombre} {contactoPersona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{contactoPersona.edad} años</small>
                <hr/>
                <Card.Text>{contactoPersona.descripcion}</Card.Text>
                {/* <Link to={"/contact/detail/" + contactoPersona.email}>
                  <Button className="btn-round" color="danger"><i className="nc-icon nc-simple-remove"/> Quitar insignia</Button>
                </Link> */}
                <Link to={"/contact/detail/" + contactoPersona.email}>
                  <Button className="btn-round" color="primary" outline><i className="nc-icon nc-single-02"/> Ver contacto</Button>
                </Link>
              </Card.Body>
            </Card>
        </div>
        </>
      );
    });


    return (
      <>
        <Helmet>
          <title>deserve · U | Insignias asignadas</title>
        </Helmet>
        
        <Link to={"/sentbadgets"}>
          <Button size="sm" className="btn-round" style={{marginLeft:'50px'}} color="default" outline><i className="fa fa-arrow-left"/> Volver</Button>
        </Link>        

        <div>
          <p className="subtitulosH3">·· <span className="subtitulosH3_2">He asignado </span>"{nombreinsignia}" <span className="subtitulosH3_2">a...</span>  ··</p>
        </div> 
        
        <div className="mostrarContactos">
          {mostrarDetalleContacto}
        </div>
      </>
    );

}

export default MostrarDetallesContacto;