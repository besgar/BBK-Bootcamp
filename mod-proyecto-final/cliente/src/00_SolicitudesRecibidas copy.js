import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import React from 'react';
import { Helmet } from 'react-helmet';

function SolicitudesRecibidas(){
    const [solicitudRecibida, setSolicitudRecibida] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:3001/contacts3/elenabestilleiro@gmail.com/pendiente")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setSolicitudRecibida(res)
        });
    },[]);
  

    /*FALTA PONER LA URL DE LA IMG DE LOS CONTACTOS */
    const mostrarContactos = solicitudRecibida.map(function(persona){
      return (
        <>
          <div className="mostrarContactosIndiv">
              <Card style={{ width: '300px' }}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Img variant="top" src="http://clouderview.com/hel/bbkboot/contacto.jpg" />
                <Card.Body>
                  <Card.Title>{persona.nombre} {persona.apellido}</Card.Title>              
                  <small className="text-muted">{persona.edad} años</small>
                  <Card.Text>{persona.descripcion}</Card.Text>              
                  <Button className="btn-round btn-icon" color="success"><i className="nc-icon nc-check-2"/> Aceptar</Button>
                  <Button className="btn-round btn-icon" color="danger"><i className="nc-icon nc-simple-remove"/> Rechazar</Button>
                </Card.Body>
              </Card>
          </div>
        </>
      );
    });
  
    return (
      <>
        <div className="mostrarContactos">
          {mostrarContactos}
        </div>
      </>
    );
}

export default SolicitudesRecibidas;