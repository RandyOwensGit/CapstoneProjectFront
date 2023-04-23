import { Link } from "react-router-dom";
import { Container, Nav, Navbar, } from "react-bootstrap";

/**
 * NAVBAR
 * 
 * @returns component
 */


export const TopNav = () => {

   return (

      <div className="rounded customFont">

         {/* Navbar Creation */}
         <Navbar className="bg-primary">
            <Container 
               fluid 
               className="mb-2 fs-3" 
               style={{ 
                  maxHeight: '100px', 
                  minHeight: '50px' 
               }}
            >

               <Nav>
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

                  <Nav.Link>
                     <Link 
                        to="/SeniorProject/logout" 
                        className="nav-link text-light linkHover" 
                        aria-current="page"
                     >
                        Logout
                     </Link>
                  </Nav.Link>
               </Nav>


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