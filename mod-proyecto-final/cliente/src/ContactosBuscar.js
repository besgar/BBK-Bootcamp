import React from "react";
import {useEffect, useState} from "react";
import {Alert,Input,InputGroup,InputGroupAddon,InputGroupText,Button} from "reactstrap";
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


  /*AÑADIR CONTACTO*/
  function refreshPage() {
    window.location.reload(false);
    }
  
    function anyadirContacto(emailContacto){
      const requestOptions2 = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto})
      };
      fetch('http://localhost:3001/contact/add', requestOptions2)
          .then(response => response.json())
          // .then(data => setDetalleContacto(data));
          .then((res)=>{});  

          refreshPage()
    };
  /*AÑADIR CONTACTO*/

  


  /*comienzo: MOSTRAR RESULTADOS DE LA BÚSQUEDA*/
  const mostrarResultadosBusqueda=contactosBuscados.map(function(persona){
    //  console.log(persona.contactos[0].email)
    //  let resultado=persona.contactos.filter(obj=>obj.find(c=>c.email==="elenabestilleiro@gmail.com"))

     let enviado=persona.contactos.find(c=>c.email==="elenabestilleiro@gmail.com" && c.estado==="enviado");
     let pendiente=persona.contactos.find(c=>c.email==="elenabestilleiro@gmail.com" && c.estado==="pendiente");
     let aceptado=persona.contactos.find(c=>c.email==="elenabestilleiro@gmail.com" && c.estado==="aceptado");

    console.log(enviado);
    console.log(pendiente);
    console.log(aceptado);

    let imagen="../../" + persona.imagen;


    if(enviado!==undefined){ //tienes su solicitud pendiente de aceptar
      return(
        <div className="mostrarContactosIndiv">
          <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                <hr/>
                <Card.Text>{persona.descripcion}</Card.Text>              
                <Alert color="warning text-center" style={{fontWeight:'600'}}>Solicitud pendiente</Alert>
            </Card.Body>
          </Card>
        </div>    
      );
    }else if(pendiente!==undefined){ //el contacto te tiene pendiente de aceptar
      return(
        <div className="mostrarContactosIndiv">
          <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                <hr/>
                <Card.Text>{persona.descripcion}</Card.Text>              
                <Alert color="danger text-center" style={{fontWeight:'600'}}>Solicitud enviada</Alert>        
            </Card.Body>
          </Card>
        </div>  
      );
    }else if(aceptado!==undefined){ //te tiene como aceptado, ya sois amigos
      return(
        <div className="mostrarContactosIndiv">
          <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                <hr/>
                <Card.Text>{persona.descripcion}</Card.Text>              
                <Alert color="success text-center" style={{fontWeight:'600'}}>¡Ya sois amigos!</Alert>        
            </Card.Body>
          </Card>
        </div> 
      );
    }else{//No le tienes como contacto, "añadir como amigo" (envias solicitud de amistad)
      return(
        <div className="mostrarContactosIndiv">
          <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><p className="mostrarNombre_contacto">{persona.nombre} {persona.apellido}</p></Card.Title>              
                <small className="text-muted" className="mostrarEdad_contacto">{persona.edad} años</small>
                <hr/>
                <Card.Text>{persona.descripcion}</Card.Text>              
                <Button className="btn-round btn-icon btnNumeroInsignia" color="success"  onClick={()=>anyadirContacto(persona.email)}><i className="nc-icon nc-single-02"/> Añadir como contacto</Button>
            </Card.Body>
          </Card>
        </div> 
      );
    }
  });  
  /*fin: MOSTRAR RESULTADOS DE LA BÚSQUEDA*/


  return (
    <>
      <Helmet>
        <title>deserve · U | Contactos</title>
      </Helmet>

        <div className="contactosBuscar" style={{marginLeft:'40px'}}>
          <div className="contactosBuscarInputs">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >
                <InputGroupText ><i className="nc-icon nc-single-02"></i></InputGroupText>
              </InputGroupAddon>
              <Input type="text" value={nombre} onChange={manageChange} placeholder="Nombre" />
            </InputGroup>
          </div>

          <div>
            <Button className="btn-round" color="primary" outline onClick={buscarNombre}><i className="nc-icon nc-zoom-split"/> Buscar</Button>
          </div>
        </div>
    
                 

        <h5 style={{textAlign:'center'}}><h5 style={{fontWeight:'600'}}>Resultados de la búsqueda </h5></h5>
        <hr style={{margin:'0'}}/>

        <div className="mostrarContactos">
          {mostrarResultadosBusqueda}
        </div>
    </>
  );
}

export default ContactosBuscar;