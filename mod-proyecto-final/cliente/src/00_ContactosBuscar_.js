import React from "react";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {Input,InputGroup,InputGroupAddon,InputGroupText,Button} from "reactstrap";
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';

      // setNombre("");//vacia el input
let mostrarResultadosBusqueda;

function ContactosBuscar(){
  const [nombre,setNombre]=useState("");

  function manageChange(event){
    setNombre(event.target.value);
  };

  function buscarNombre(){
    fetch("http://localhost:3001/contacts/findcontactname/" + nombre)
    .then(function(res){
        return res.json();
    }).then(function(res){
      //console.log(res);
      setNombre(res);    
    });
    console.log(nombre);
    const returnedArray = Array.from(nombre)
    const mostrarResultadosBusqueda=returnedArray.map(function(persona){
      console.log(persona.contactos)
      // console.log(persona.contactos[0])
      // console.log(persona.contactos.email)
      // console.log(persona.contactos[0].email)
  
      if(persona.contactos==="elenabestilleiro@gmail.com"==="enviado"){
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
                    <Button className="btn-round btn-icon" color="success"><i className="nc-icon nc-simple-add"/> Solicitud pendiente de aceptar</Button>
                  </Card.Body>
                </Card>
            </div>
          </>
        );
      }else{
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
                      <Button className="btn-round" color="default" outline><i className="nc-icon nc-check-2"/> Ya es tu contacto</Button>
                    </Card.Body>
                  </Card>
              </div>
            </>
          );
        }
    });
  }; 

  //console.log(nombre);

 

  

  


 
  return (
    <>
      <Helmet>
        <title>TITULO | Contactos</title>
      </Helmet>

        <div className="contactosBuscar">
          <div className="contactosBuscarInputs">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >
                <InputGroupText ><i className="nc-icon nc-single-02"></i></InputGroupText>
              </InputGroupAddon>
              <Input  type="text" value={nombre} onChange={manageChange} placeholder="Nombre" />
            </InputGroup>
          </div>

          {/* <div className="contactosBuscarInputs">
            <InputGroup >
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="nc-icon nc-single-02"></i></InputGroupText>
              </InputGroupAddon>
              <Input type="text" placeholder="Apellidos"/>
            </InputGroup>
          </div> */}

          <div className="contactosBuscarBoton">
            <Button className="btn-round" color="default" outline onClick={buscarNombre}><i className="nc-icon nc-zoom-split"/> Buscar</Button>
          </div>
        </div>
    
        <div>
          <p>Resultados de la búsqueda</p>
          <hr/>          
          {mostrarResultadosBusqueda}
        </div>
    </>
  );
}

export default ContactosBuscar;