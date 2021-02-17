import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function ContactosBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                {/* <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem> */}
                <BreadcrumbItem active>Contactos</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default ContactosBreadCrumb;