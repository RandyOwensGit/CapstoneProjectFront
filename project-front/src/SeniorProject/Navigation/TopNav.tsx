/**
 * Handle creating top NAVBAR - Basic Navigation around site
 * 
 */

import { Link } from "react-router-dom";

export const TopNav = () => {

   return (

      // Navbar Creation
      <nav className="navbar navbar-expand-lg bg-primary">
         {/* <!-- Container wrapper --> */}
         <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
               className="navbar-toggler"
               type="button"
               data-mdb-toggle="collapse"
               data-mdb-target="#navbarCenteredExample"
               aria-controls="navbarCenteredExample"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
               className="collapse navbar-collapse justify-content-center"
               id="navbarCenteredExample"
            >
               {/* <!-- Left links --> */}
               <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <b><a className="nav-link text-secondary" href="#">User Home</a></b>
                  </li>
               </ul>
               {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
         </div>
         {/* <!-- Container wrapper --> */}
      </nav>

   );
}