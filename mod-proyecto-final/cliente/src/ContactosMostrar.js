import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import React from 'react';
import { Helmet } from 'react-helmet';

function ContactosMostrar(){
  const [contacto, setContacto] = useState([]);
   
  useEffect(()=>{
      fetch("http://localhost:3001/contacts3/elenabestilleiro@gmail.com/aceptado")
      .then((res)=>res.json())
      .then((res)=>{
        // console.log(res);
        setContacto(res)
      });
  },[]);

  console.log(contacto);



  const mostrarContactos = contacto.map(function(persona){
    return (
      <>
        <div className="mostrarContactosIndiv">
            <Card style={{ width: '300px' }}>
              <Card.Img variant="top" alt="imagen_contacto" src={persona.imagen} />
              <Card.Body>
                <Card.Title ><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                <hr/>
                <Card.Text>{persona.descripcion}</Card.Text>              
                <Link to={"/contact/detail/" + persona.email}>
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
        <title>deserve · U | Contactos</title>
      </Helmet>

      <div className="botonBuscar_contacto">
        <Link to={"/contacts/find"}>
            <Button className="btn-round" color="primary" outline><i className="nc-icon nc-zoom-split"/> Buscar contacto</Button>
        </Link>
      </div>


      <div>
        <p className="subtitulosH3" style={{marginTop:'0'}}>·· Mis contactos ··</p>
      </div> 

      <div className="mostrarContactos">
        {mostrarContactos}
      </div>

    </>
  );
}

export default ContactosMostrar;