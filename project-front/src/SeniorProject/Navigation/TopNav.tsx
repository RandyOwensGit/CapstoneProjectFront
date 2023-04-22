import { Link } from "react-router-dom";
import { Container, Nav, Navbar, } from "react-bootstrap";

/**
 * NAVBAR
 * 
 * @returns component
 */


export const TopNav = () => {

   return (

      <div className="rounded">

         {/* Navbar Creation */}
         <Navbar className="bg-primary">
            <Container fluid className="mb-2" style={{ maxHeight: '100px', minHeight: '50px' }}>

               <Nav>
               <Nav.Link>
                     <Link to="/SeniorProject/login" className="nav-link text-secondary" aria-current="page">
                        <b>Login</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/logout" className="nav-link text-secondary" aria-current="page">
                        <b>Logout</b>
                     </Link>
                  </Nav.Link>
               </Nav>


               {/* right side of navbar */}
               {/* TODO: Add Collapse for responsive screen size */}
               <Nav className="d-flex">
                  <Nav.Link>
                     <Link to="/SeniorProject/" className="nav-link text-secondary" aria-current="page">
                        <b>Home</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/Profile" className="nav-link text-secondary" aria-current="page">
                        <b>Profile</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/Inserts" className="nav-link text-secondary" aria-current="page">
                        <b>Inserts</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/Tables" className="nav-link text-secondary" aria-current="page">
                        <b>Tables</b>
                     </Link>
                  </Nav.Link>

                  <Nav.Link>
                     <Link to="/SeniorProject/AddBook" className="nav-link text-secondary" aria-current="page">
                        <b>Add Book</b>
                     </Link>
                  </Nav.Link>
               </Nav>

            </Container>


         </Navbar>

      </div>

   );
}