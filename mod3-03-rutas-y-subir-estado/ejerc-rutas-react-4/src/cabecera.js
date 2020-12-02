import { Link } from "react-router-dom";

function Cabecera(props){
    return (
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quinteto">Quinteto</Link></li>
          <li><Link to="/jugador0">{props.equipo[0].nombre}</Link></li>
          <li><Link to="/jugador1">{props.equipo[1].nombre}</Link></li>
          <li><Link to="/jugador2">{props.equipo[2].nombre}</Link></li>
          <li><Link to="/jugador3">{props.equipo[3].nombre}</Link></li>
          <li><Link to="/jugador4">{props.equipo[4].nombre}</Link></li>
        </ul>
    );
};

export default Cabecera;
