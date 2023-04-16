import { Outlet} from "react-router-dom"
import { TopNav } from "./Navigation/TopNav";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/nav.scss";

/**
 * Creates Page for User -- Default creates landing page
 * <Outlet /> Displays which ever page user has selected
 *
 */

export const PageLayout = () => {

   return (
      <>
         <TopNav />

         <Outlet />
      </>
   );

}
