import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function InsigniasAsignadasBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                {/* <BreadcrumbItem><a href="#">Hall of Fame</a></BreadcrumbItem> */}
                <BreadcrumbItem active>Insignias asignadas</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default InsigniasAsignadasBreadCrumb;