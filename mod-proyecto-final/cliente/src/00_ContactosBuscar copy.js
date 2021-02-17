import React from "react";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {Input,InputGroup,InputGroupAddon,InputGroupText,Button} from "reactstrap";
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';


function ContactosBuscar(){
  const [nombre,setNombre]=useState("");
  const [contactosBuscados, setContactosBuscados] = useState([]);

  function manageChange(event){
    console.log(event.target.value);
    setNombre(event.target.value);
   
  };

  function buscarNombre(){
    fetch("http://localhost:3001/contacts/findcontactname/" + nombre)
    .then(function(res){
        return res.json();
    }).then(function(res){
      setContactosBuscados(res);
    });
}; 

  

   const mostrarResultadosBusqueda=contactosBuscados.map(function(persona){
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