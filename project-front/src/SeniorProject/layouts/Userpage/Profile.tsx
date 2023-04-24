import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import img from "../../../assets/profilepic.jpg"
import { useEffect, useState } from "react";

/**
 * Profile Page
 * @returns Profile Page Component
 */

// User Profile Page
export const UserProfile: React.FC = () => {

   const [loggedIn, setLoggedIn] = useState(false);
   const [formattedUser, setFormattedUser] = useState(JSON.parse(localStorage.getItem("user") || '{}'));

   useEffect(() => {

      if (localStorage.getItem("user") !== null) {
         setLoggedIn(true);

      } else {
         setLoggedIn(false);

      }

   }, [loggedIn]);

   return (
      <div>

         {/* Checked if Logged in */}
         {
            (loggedIn)
               ?

               // Logged In
               <Container
                  style={{ marginTop: "5rem", height: "100%", width: "100%" }}
               >
                  <Row>

                     <Col
                        sm={4}
                        className=""
                        style={{

                        }}
                     >
                        <Card
                           bg="primary"
                           style={{
                              width: '18rem',
                           }}
                        >

                           <Card.Img
                              variant="top"
                              src={img}
                           />

                           <Card.Body>
                              <Card.Title className="text-center">
                                 <h2>{formattedUser.username} Profile</h2>
                              </Card.Title>
                              Email: {formattedUser.email}
                              <div>
                                 Date Created: {formattedUser.dateCreated.substring(0, 10)}
                              </div>
                           </Card.Body>

                        </Card>

                     </Col>

                     <Col
                        sm={8}
                        className=""
                        style={{

                        }}
                     >

                     </Col>

                  </Row>


               </Container>


               :
               // Not Logged In
               <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "3rem" }}
               >
                  <h2>You need to <Link to="/seniorproject/login" >sign in</Link> before you can access this page.</h2>
               </div>

         }

      </div>


   )


}