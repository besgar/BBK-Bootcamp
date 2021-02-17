import './App.css';
import {useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";

import Login from './LoginOK.js';
import UsuarioBarraSuperior from './UsuarioBarraSuperior.js';
import UsuarioMenu from './UsuarioMenu.js';
import Footer from "./Footer.js";
import ContactosBreadCrumb from './ContactosBreadCrumb.js';
import ContactosMostrar from './ContactosMostrar.js';
import ContactoMostrarDetalle from './ContactoMostrarDetalle.js';
import ContactoMostrarDetalleBreadCrumb from './ContactoMostrarDetalleBreadCrumb.js';
import HallOfFameWhoBreadCrumb from './HallOfFameWhoBreadCrumb.js';
import HallOfFameWho from "./HallOfFameWho.js";
import HallOfFame from './HallOfFame.js';
import InsigniasAsignadasBreadCrumb from './InsigniasAsignadasBreadCrumb.js';
import InsigniasAsignadas from './InsigniasAsignadas.js';
import InsigniasAsignadasWhoBreadCrumb from './InsigniasAsignadasWhoBreadCrumb.js';
import InsigniasAsignadasWho from './InsigniasAsignadasWho.js';
import Solicitudes from './Solicitudes.js';
import SolicitudesBreadCrumb from './SolicitudesBreadCrumb.js';
import ContactosBuscarBreadCrumb from './ContactosBuscarBreadCrumb.js';
import ContactosBuscar from './ContactosBuscar.js';

function App() {
  const [usuario, setUsuario]=useState({});
  const [mensaje,setMensaje]=useState("");

  
  function doLogin(username, password){
    console.log(username);
    console.log(password);
    
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // credentials: 'include',
          body: JSON.stringify({ email: username, password: password }),
      };
      fetch('/api/login', requestOptions)
          .then(response => response.json())
          .then(data => {setMensaje(data.mensaje); setUsuario(data.usuario)});
    };

  return (
    <BrowserRouter>
      {/* <Route exact path="/">
        <Homecabecera/>
        <HomeMain/>
      </Route> */}

      <UsuarioBarraSuperior/> {/*Siempre visible. Muestra la foto del usuario logeado*/} 
      <UsuarioMenu/> {/*Siempre visible.*/} 


      <Route exact path="/login">
        <Login doLogin={doLogin} mensaje={mensaje}/>
      </Route>

      <Route exact path="/halloffame"> {/*Es la "home" de la zona del usuario. Muestra todas las insignias que he recibido*/}  
          <HallOfFame/>
      </Route>

      <Route exact path="/halloffame/who/:nombreinsignia"> {/*Muestra qué contactos me han dado cada insignia*/}
            <HallOfFameWhoBreadCrumb/>
            <HallOfFameWho/> 
      </Route>

      <Route exact path="/sentbadgets">{/*Muestra las 12 insignias que hay y me dice cuantas me quedan por asignar*/}
        <InsigniasAsignadasBreadCrumb/>
        <InsigniasAsignadas/>
      </Route>

      <Route exact path="/sentbadgets/who/given/:nombreinsignia"> {/*Muestra a quién(es) le he asignado esa insignia*/}
        <InsigniasAsignadasWhoBreadCrumb/>
        <InsigniasAsignadasWho/>
      </Route>

      <Route exact path="/contacts"> {/*Muestra los contactos que tengo (aceptados)*/}  
        <ContactosBreadCrumb/> 
        <ContactosMostrar/>
      </Route> 

      <Route exact path="/contacts/find"> {/*Muestra los contactos que tengo (aceptados)*/}  
        <ContactosBuscarBreadCrumb/>
        <ContactosBuscar/>
      </Route> 

      <Route exact path="/contact/detail/:email"> {/*Muestra el detalle de cada contacto*/}
            <ContactoMostrarDetalleBreadCrumb/>
            <ContactoMostrarDetalle/>
      </Route> 

      <Route exact path="/request"> {/* */}
        <SolicitudesBreadCrumb/>
        <Solicitudes/>
      </Route>

      <Footer/> {/*Siempre visible.*/}

    </BrowserRouter>
  );
}

export default App;
