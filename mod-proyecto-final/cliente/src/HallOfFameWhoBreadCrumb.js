import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function HallOfFameWhoBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                <BreadcrumbItem><a href="/halloffame">Hall of Fame</a></BreadcrumbItem>
                <BreadcrumbItem active>¿Qué contactos me han dado la insignia?</BreadcrumbItem>
            </Breadcrumb>
        </>
    );

}

export default HallOfFameWhoBreadCrumb;