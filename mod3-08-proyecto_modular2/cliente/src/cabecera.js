import {BrowserRouter, Route, Link} from "react-router-dom";

function Cabecera(){
    return (
        <>
            <header id="header">
                <div id="headerLogo">
                    {/* <a href="./index.html"><img src="./img/logotipo.png" alt="logotipo"/></a> */}
                   <Link to="/"><img src="./img/logotipo.png" alt="logotipo"/></Link>
                </div>

                <nav id="headerMenu">
                    <div id="menuHome">
                        <Link to="/" class="headerMenuSeleccionado">HOME</Link>
                    </div>
                    <div id="menuConsejos">
                        <Link to="">CONSEJOS CULINARIOS</Link>
                    </div>
                    <div id="menuBuscador">
                        <Link to="/buscador">BUSCADOR</Link>
                    </div>
                    <div id="menuUsuario">
                        <Link to="/usuario">ZONA PRIVADA</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Cabecera;