import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import HallOfFameShare from "./HallOfFameShare.js"


function HallOfFameBreadCrumb() {
    return(
        <>
            <Breadcrumb>
                {/* <BreadcrumbItem><a href="#">Hall of Fame</a></BreadcrumbItem> */}
                <BreadcrumbItem active>Hall of Fame</BreadcrumbItem>
            </Breadcrumb>
            
        </>
    );

}

export default HallOfFameBreadCrumb;