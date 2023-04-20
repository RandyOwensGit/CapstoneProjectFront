/**
 * Display short search results info
 * Search - Total Books - tooltip (search development is in progress..)
 * @returns component
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
                     <Link to="/SeniorProject/" className="nav-link active" aria-current="page"><b>Home</b></Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/SeniorProject/UserPage" className="nav-link text-secondary"><b>User Home</b></Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/SeniorProject/Inserts" className="nav-link text-secondary"><b>Insert</b></Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/SeniorProject/Tables" className="nav-link text-secondary"><b>Tables</b></Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/SeniorProject/AddBook" className="nav-link text-secondary"><b>Add Book</b></Link>
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