import { Outlet} from "react-router-dom"
import { TopNav } from "./Navigation/TopNav";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/nav.scss";

/**
 * Holds Page layouts in accordance with Routing inside App.tsx
 * Outlet displays routed page
 * @returns routing component layout
 */

export const PageLayout = () => {

   return (
      <div 
         className="bg-light" 
         style={{
            height: "100vh"
         }}
      >
         <TopNav />

         <Outlet />
      </div>
   );

}
