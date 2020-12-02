import {useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Cabecera from "./cabecera.js";
import Gatos from "./gatos.js";
import Perros from "./perros.js";


function App() {
  const [gatos, setGatos]=useState(["https://mk0lanoticiavesdar5g.kinstacdn.com/wp-content/uploads/2020/08/los-gatos-mas-famosos-del-mundo-scaled.jpeg","https://s1.eestatic.com/2020/07/27/curiosidades/espana-pueblos/Gatos-Mascotas-Cerebro-Curiosidades_de_Espana-_sus_pueblos-_cultura_y_folclore_508459935_156552261_1024x576.jpg"]);
  const [perros, setPerros]=useState(["https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg","https://www.hola.com/imagenes/estar-bien/20200818173745/razas-de-perro-mas-grunonas/0-856-810/razas-perro-m.jpg"]);
  
  return (
    <BrowserRouter>
      <Cabecera/>

      <Route exact path="/">
          <p>Estamos en la página de inicio</p>
      </Route>

      <Route exact path="/gatos">
        <Gatos gatos={gatos}/>
      </Route>

      <Route exact path="/perros">
        <Perros perros={perros}/>
      </Route>

    </BrowserRouter>
  );
}

export default App;
