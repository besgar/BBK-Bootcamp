import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function SolicitudesBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                {/* <BreadcrumbItem><a href="#">Hall of Fame</a></BreadcrumbItem> */}
                <BreadcrumbItem active>Solicitudes</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default SolicitudesBreadCrumb;