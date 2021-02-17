import {useEffect, useState} from "react";
import { Link, useParams, Redirect, useHistory} from "react-router-dom";
import React from 'react';
import { Helmet } from 'react-helmet';
import {Button} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import { CardTitle, CardText } from 'reactstrap';
import ContactoDetalleInsigniasAsignadas_MejorMadre from "./ContactoDetalleInsigniasAsignadas_MejorMadre.js";
import ContactoDetalleInsigniasAsignadas_MejorPadre from "./ContactoDetalleInsigniasAsignadas_MejorPadre.js";
import ContactoDetalleInsigniasAsignadas_BestFriend from './ContactoDetalleInsigniasAsignadas_BestFriend.js';
import ContactoDetalleInsigniasAsignadas_TeQuiero from './ContactoDetalleInsigniasAsignadas_TeQuiero.js';
import ContactoDetalleInsigniasAsignadas_ComoFamilia from './ContactoDetalleInsigniasAsignadas_ComoFamilia.js';
import ContactoDetalleInsigniasAsignadas_Detallista from './ContactoDetalleInsigniasAsignadas_Detallista.js';
import ContactoDetalleInsigniasAsignadas_Luchador from './ContactoDetalleInsigniasAsignadas_Luchador.js';
import ContactoDetalleInsigniasAsignadas_Optimista from './ContactoDetalleInsigniasAsignadas_Optimista.js';
import ContactoDetalleInsigniasAsignadas_Artista from './ContactoDetalleInsigniasAsignadas_Artista.js';
import ContactoDetalleInsigniasAsignadas_EnPlenaForma from './ContactoDetalleInsigniasAsignadas_EnPlenaForma.js';
import ContactoDetalleInsigniasAsignadas_AlMasTrabajador from './ContactoDetalleInsigniasAsignadas_AlMasTrabajador.js';
import ContactoDetalleInsigniasAsignadas_Top from './ContactoDetalleInsigniasAsignadas_Top.js';


function ContactoMostrarDetalle(){

  const [detalleContacto, setDetalleContacto] = useState([]);
  const params=useParams();
  const emailContacto=params.email;

  const [mensaje,setMensaje]=useState("");


  useEffect(()=>{
      fetch("http://localhost:3001/contact/detail/" + emailContacto)
      .then((res)=>res.json())
      .then((res)=>{
          console.log("res")
          console.log(res)
          setDetalleContacto(res)
          // setDetalleContacto(res[0].contactos)
      });
  },[]);

    console.log("detalleContacto");
    console.log(detalleContacto);


/*ELIMINAR CONTACTO*/  /*REDIRIGIR A PAGINA DE "MIS CONTACTOS"*/
  function refreshPage() {
  window.location.reload(false);
  }

  function redirectPage(){
    window.location.href="/contacts"
  }


  function eliminarContacto(emailContacto){
    const requestOptions2 = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto})
    };
    fetch('http://localhost:3001/contact/delete', requestOptions2)
        .then(response => response.json())
        // .then(data => setDetalleContacto(data));
        .then((res)=>{
          setMensaje(res.mensaje);
          
          redirectPage()
        });    
  };
/* */


console.log("detalleContacto");
console.log(detalleContacto);


  // // const mostrarDetalleContacto = detalleContacto.filter(persona=>persona.contacto===emailContacto).map(function(persona){
  const mostrarDetalleContacto = detalleContacto.map(function(persona){
    console.log("persona");
    console.log(persona);  

    let imagen="../../" + persona.imagen;
    
    return (
        <>
          <div className="mostrarContactoDetalle">
            <Card class="card mb-3" style={{ width: '100%' }}>
              <div class="row no-gutters">                
                  <div class="col-md-3">
                    <Card.Img alt="imagen_contacto" src={imagen}/>
                  </div>
                  <div class="col-md-9">
                      <Card.Body class="card-body" style={{paddingTop:'0'}}>
                        <CardTitle class="card-title"><p className="mostrarNombre_contacto" style={{fontSize:'22px'}}>{persona.nombre} {persona.apellido}</p></CardTitle>
                        <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                        <hr/>
                        <CardText class="card-text">{persona.descripcion}</CardText>
                        <div className="btnEliminarContacto_contactoDetalle">
                          <Button className="btn-round" color="danger" onClick={()=>eliminarContacto(persona.email)}><i className="nc-icon nc-simple-remove"/> Eliminar contacto</Button>
                        </div>
                      </Card.Body>
                  </div>

              </div>
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
      
      <Link to={"/contacts"}>
        <Button size="sm" className="btn-round" style={{marginLeft:'50px'}} color="default" outline><i className="fa fa-arrow-left"/> Volver</Button>
      </Link>


      {mostrarDetalleContacto}      

      {/* <div className="btnEliminarContacto_contactoDetalle">
        <Button className="btn-round" style={{marginBottom:'40px'}} color="danger" onClick={()=>eliminarContacto(persona.email)}><i className="nc-icon nc-simple-remove"/> Eliminar contacto</Button>
      </div> */}

      <div>
        <p className="subtitulosH3" style={{marginTop:'50px'}} >·· Insignias asignadas ··</p>
      </div> 

      <div className="mostrarContactosInsigniasAsignadas">
        <ContactoDetalleInsigniasAsignadas_MejorMadre/>
        <ContactoDetalleInsigniasAsignadas_MejorPadre/>
        <ContactoDetalleInsigniasAsignadas_BestFriend/>
        <ContactoDetalleInsigniasAsignadas_TeQuiero/> 
        <ContactoDetalleInsigniasAsignadas_ComoFamilia/> 
        <ContactoDetalleInsigniasAsignadas_Detallista/> 
        <ContactoDetalleInsigniasAsignadas_Luchador/> 
        <ContactoDetalleInsigniasAsignadas_Optimista/> 
        <ContactoDetalleInsigniasAsignadas_Artista/> 
        <ContactoDetalleInsigniasAsignadas_EnPlenaForma/>
        <ContactoDetalleInsigniasAsignadas_AlMasTrabajador/> 
        <ContactoDetalleInsigniasAsignadas_Top/>
      </div>
    </>
  );
}

export default ContactoMostrarDetalle;