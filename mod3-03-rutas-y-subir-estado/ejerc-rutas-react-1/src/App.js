import {BrowserRouter, Route, Link} from "react-router-dom";
import {useState} from "react";
import Cabecera from "./cabecera.js";
import Nombres from "./nombres.js";

function App() {
  return (
    <BrowserRouter> 
      <Cabecera/>

      <Route exact path="/">
        <h1>Rutas en React</h1>
      </Route>

      <Route exact path="/nombres">
        <Nombres/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
