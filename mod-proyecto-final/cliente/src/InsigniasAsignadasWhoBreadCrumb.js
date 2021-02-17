import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function InsigniasAsignadasWhoBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem><a href="/sentbadgets">Insignias asignadas</a></BreadcrumbItem>
                <BreadcrumbItem active>¿A quién le he asignado la insignia?</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default InsigniasAsignadasWhoBreadCrumb;