import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link,useParams} from "react-router-dom";

import UsuarioBarraSuperior from './UsuarioBarraSuperior';
import MenuLateralIzq from './MenuLateralIzq';
import Contactos from "./Contactos.js";
import ContactoMostrarDetalles from "./HallOfFameWho.js";
import Footer from "./Footer.js";
import Homecabecera from "./HomeCabecera.js";
import HomeMain from "./HomeMain.js";
import ContactosMostrar from './ContactosMostrar';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/"> {/*Home*/}
        <Homecabecera/>
        <HomeMain/>
      </Route>

{/*Zona de usuario*/} 
      <BrowserRouter>
        <Route exact path="/contacts">         
          <UsuarioBarraSuperior/> {/*Siempre visible en la parte superior. Mostrará la foto del usuario logeado*/} 
          <div className="contenedorPrincipal">
            <MenuLateralIzq className="menuLateralIzq"/> {/*Menu de la zona de usuario. Siempre visible.*/}        
            <div className="main">
              <Route className="contactos">
                  <div className="mostrarContactosContenedor">
                    <ContactosMostrar/> {/*Muestra los contactos que tengo*/} 
                  </div>
              </Route>
            </div>              
          </div>
        </Route>  

        <Route exact path="/contact/detail/:contacto">
          <UsuarioBarraSuperior/> {/*Siempre visible en la parte superior. Mostrará la foto del usuario logeado*/} 
          <div className="contenedorPrincipal">
            <MenuLateralIzq className="menuLateralIzq"/>  {/*Menu de la zona de usuario. Siempre visible.*/}          
            <div className="main">
              <Route className="contactos">
                <div className="mostrarContactosContenedor">
                  <ContactoMostrarDetalles/> {/*Muestra el detalle de cada contacto*/}
                </div>
              </Route>
            </div>              
          </div>
        </Route>
      </BrowserRouter>

      <Footer/> {/*Siempre visible, tanto en la "home" como en la "zona de usuario".*/}

    </BrowserRouter>
  );
}

export default App;
