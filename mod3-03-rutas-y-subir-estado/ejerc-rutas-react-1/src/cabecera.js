import {BrowserRouter, Route, Link} from "react-router-dom";

function Cabecera(){
    return (
        <header>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/nombres">Nombres</Link></li>
            </ul>
        </header>
    );
};

export default Cabecera;