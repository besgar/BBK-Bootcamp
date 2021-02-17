import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function ContactosBuscarBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem><a href="/contacts">Contactos</a></BreadcrumbItem>
                <BreadcrumbItem active>Buscar contactos</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default ContactosBuscarBreadCrumb;