import {BrowserRouter, Route, Link,useParams} from "react-router-dom";

import ContactosMostrar from "./ContactosMostrar.js";

function Contactos () {
    return(
        <>
            <div className="contactos">
                <div className="mostrarContactosContenedor">
                    <ContactosMostrar/>
                    <ContactosMostrar/>
                    <ContactosMostrar/>
                    <ContactosMostrar/>
                    <ContactosMostrar/>
                </div>
            </div>
        </>
    );
}

export default Contactos;