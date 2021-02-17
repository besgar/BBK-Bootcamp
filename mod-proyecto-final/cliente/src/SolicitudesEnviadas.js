import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import React from 'react';

function SolicitudesEnviadas(){
    const [solicitudEnviada, setSolicitudEnviada] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:3001/contacts3/elenabestilleiro@gmail.com/enviado")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setSolicitudEnviada(res)
        });
    },[]);
  



    /*ELIMINAR SOLICITUD*/
    function refreshPage() {
      window.location.reload(false);
      }
    
    function eliminarSolicitud(emailContacto){
      const requestOptions2 = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto})
      };
      fetch('http://localhost:3001/contact/delete', requestOptions2)
        .then(response => response.json())
         // .then(data => setDetalleContacto(data));
        .then((res)=>{});  
          
        refreshPage();
    };
    /*ELIMINAR SOLICITUD*/



    /*FALTA PONER LA URL DE LA IMG DE LOS CONTACTOS */
    const mostrarContactos = solicitudEnviada.map(function(persona){
      return (
        <>
          <div className="mostrarContactosIndiv">
              <Card style={{ width: '300px' }}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Img variant="top" src={persona.imagen} />
                <Card.Body>
                  <Card.Title className="mostrarNombre_contacto"><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                  <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                  <hr/>
                  <Card.Text>{persona.descripcion}</Card.Text>              
                  <Button  size="sm" className="btn-round" color="danger" onClick={()=>eliminarSolicitud(persona.email)}><i className="nc-icon nc-simple-remove"/> Eliminar solicitud</Button>
                </Card.Body>
              </Card>
          </div>
        </>
      );
    });
  
    return (
      <>
        <div className="mostrarSolicitudes">
          {mostrarContactos}
        </div>
      </>
    );
}

export default SolicitudesEnviadas;