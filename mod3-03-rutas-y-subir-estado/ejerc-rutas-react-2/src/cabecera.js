const { Link } = require("react-router-dom");

function Cabecera(){
    return(
        <header>
            <h1>Rutas en react</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/gatos">Gatos</Link></li>
                <li><Link to="/perros">Perros</Link></li>
            </ul>
        </header>
    );
};

export default Cabecera;