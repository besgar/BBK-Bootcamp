import {BrowserRouter, Route, Link} from "react-router-dom";

function Footer(){
    return(
        <>
            <div id="footer1">
                <div id="menuPie">
                    <Link to="/" class="footerMenuSeleccionado" >HOME</Link>
                    <a>|</a>
                    <a href="/">CONSEJOS CULINARIOS</a>
                    <a>|</a>
                    <Link to="/buscador">BUSCADOR</Link>
                    <a>|</a>
                    <Link to="/usuario">ZONA PRIVADA</Link>
                </div>            
                <p id="parrafoPie">Copyright © 2020. Todos los derechos reservados.</p>
            </div>
            <div id="footer2">
                <div class="iconosRedesSociales">
                    <img src="./img/redes_sociales_facebook.png" alt="redes_sociales_facebook"/>
                </div>
                <div class="iconosRedesSociales">
                    <img src="./img/redes_sociales_twitter.png" alt="redes_sociales_twitter"/>
                </div>        
                <div class="iconosRedesSociales">
                    <img src="./img/redes_sociales_youtube.png" alt="redes_sociales_youtube"/>
                </div>        
                <div class="iconosRedesSociales">
                    <img src="./img/redes_sociales_instagram.png" alt="redes_sociales_instagram"/>
                </div>        
            </div>
    </>
    );
}

export default Footer;