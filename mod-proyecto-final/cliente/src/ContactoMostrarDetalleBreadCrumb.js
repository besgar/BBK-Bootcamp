import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {Button} from 'reactstrap';

function ContactoMostrarDetalleBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem><a href="/contacts">Contactos</a></BreadcrumbItem>
                <BreadcrumbItem active>Información contacto</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default ContactoMostrarDetalleBreadCrumb;