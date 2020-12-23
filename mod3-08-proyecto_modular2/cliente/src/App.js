import './App.css';
// import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import Cabecera from'./cabecera.js';
import Main from'./main.js';
import Footer from'./footer.js';
import Buscador from'./buscador.js';
import Usuario from './usuario';

function App() {

  // useEffect(()=>{
  //   fetch("http://localhost:3001/recetas")
  //   .then((res)=>res.json())
  //   .then((res)=>{
  //     console.log(res)
  //   });
  // },[]);
  

  return (
    <BrowserRouter>

      <Cabecera/>

      <Route exact path="/">
        <Main/>
      </Route>

      <Route exact path="/buscador">
        <Buscador/>
      </Route>

      <Route exact path="/usuario">
        <Usuario/>
      </Route>
            
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
