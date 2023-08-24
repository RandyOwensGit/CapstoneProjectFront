import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { useEffect, useState } from "react";

/**
 * NAVBAR
 * @returns top navbar component
 */
export const TopNav = () => {

   // check if user is logged in for displaying login/logout buttons
   const [loggedIn, setLoggedIn] = useState(false);

   // useLocation hook on useEffect
   const location = useLocation();
   useEffect(() => {

      if (localStorage.getItem("user") !== null) {
         setLoggedIn(true);

      } else {
         setLoggedIn(false);

      }

   }, [location.pathname]);

   return (

      <div className="rounded customFont">

         {/* Navbar Creation */}
         <Navbar className="bg-primary">
            <Container
               fluid
               className="mb-2 fs-3"
               style={{
                  maxHeight: '40px',
                  minHeight: '40px'
               }}
            >

               <Nav>

                  {
                     // 
                     (loggedIn)
                        ?
                        // Logout button
                        <Nav.Link>
                           <Link
                              to="/SeniorProject/logout"
                              className="nav-link text-light linkHover"
                              aria-current="page"
                           >
                              Logout
                           </Link>
                        </Nav.Link>
                        :
                        // Login button
                        <Nav.Link>
                           <Link
                              to="/SeniorProject/login"
                              className="nav-link text-light linkHover"
                              aria-current="page"
                              style={{ marginRight: '1rem' }}
                           >
                              Login
                           </Link>
                        </Nav.Link>
                  }

               </Nav>

               - Database & Backend Service Offline -

               {/* right side of navbar */}
               {/* TODO: Add Collapse for responsive screen size */}
               <Nav className="d-flex">
                  <Nav.Link>
                     <Link
                        to="/SeniorProject/"
                        className="nav-link text-light linkHover"
                        aria-current="page"
                        style={{ marginRight: '1rem' }}
                     >
                        Home
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link
                        to="/SeniorProject/Profile"
                        className="nav-link text-light linkHover"
                        aria-current="page"
                        style={{ marginRight: '1rem' }}
                     >
                        Profile
                     </Link>
                  </Nav.Link>

                  {/* <Nav.Link>
                     <Link to="/SeniorProject/Inserts" className="nav-link text-secondary" aria-current="page">
                        <b>Inserts</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/Tables" className="nav-link text-secondary" aria-current="page">
                        <b>Tables</b>
                     </Link>
                  </Nav.Link> */}

                  <Nav.Link>
                     <Link
                        to="/SeniorProject/AddBook"
                        className="nav-link text-light linkHover"
                        aria-current="page"
                     >
                        Add Book
                     </Link>
                  </Nav.Link>
               </Nav>

            </Container>


         </Navbar>

      </div>

   );
}