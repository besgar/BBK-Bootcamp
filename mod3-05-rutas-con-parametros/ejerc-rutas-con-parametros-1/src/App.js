import {useState} from "react";
import { useParams } from "react-router-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";

function Saludo(){
  const params= useParams();
  const nombre= params.nombre;
  return <h3>¡Hola {nombre}!</h3>
};

function App() {
  const [text, setText]=useState("");

  function actualizar(event){
    setText(event.target.value);
  };

  return (
    <BrowserRouter>

      <input type="text" value={text} onChange={actualizar}/>

      <Link to={"/saludar/" + text}>Saludar</Link>

      <Route exact path="/saludar/:nombre">
        <Saludo/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
