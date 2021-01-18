import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import Cabecera from "./HomeCabecera.js";

function App() {
  return (
    <BrowserRouter>
      <Cabecera/>
    
    </BrowserRouter>
  );
}

export default App;
