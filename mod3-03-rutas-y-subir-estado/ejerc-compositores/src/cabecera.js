import {BrowserRouter, Route, Link} from "react-router-dom";

function Cabecera(){
    return (
        <>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/eliminar">Eliminar Compositor</Link></li>
            </ul>
        </>
    );
};

export default Cabecera;