import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import {Button} from 'reactstrap';
import React from 'react';

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
  


    /*ACEPTAR SOLICITUD*/
    function refreshPage() {
      window.location.reload(false);
      }
    
    function aceptarSolicitud(emailContacto){
      const requestOptions2 = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto})
      };
      fetch('http://localhost:3001/contact/accept', requestOptions2)
        .then(response => response.json())
         // .then(data => setDetalleContacto(data));
        .then((res)=>{});  
          
        refreshPage();
    };
    /*ACEPTAR SOLICITUD*/



    /*RECHAZAR SOLICITUD*/
    function refreshPage() {
      window.location.reload(false);
      }
    
    function rechazarSolicitud(emailContacto){
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
    /*RECHAZAR SOLICITUD*/



    /*FALTA PONER LA URL DE LA IMG DE LOS CONTACTOS */
    const mostrarContactos = solicitudRecibida.map(function(persona){
      return (
        <>
          <div className="mostrarContactosIndiv">
              <Card style={{ width: '300px' }}>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Img variant="top" src={persona.imagen} />
                <Card.Body>
                  <Card.Title><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                  <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                  <hr/>
                  <Card.Text>{persona.descripcion}</Card.Text>              
                  <Button size="sm" className="btn-round btn-icon" style={{marginRight: '8px'}} color="success" onClick={()=>aceptarSolicitud(persona.email)}><i className="nc-icon nc-check-2"/> Aceptar</Button>
                  <Button size="sm" className="btn-round btn-icon" style={{marginLeft: '8px'}} color="danger" onClick={()=>rechazarSolicitud(persona.email)}><i className="nc-icon nc-simple-remove"/> Rechazar</Button>
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

export default SolicitudesRecibidas;