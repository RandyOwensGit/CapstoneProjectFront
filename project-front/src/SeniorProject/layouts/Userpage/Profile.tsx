import { Link } from "react-router-dom";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import img from "../../../assets/profilepic.jpg"


// User Profile Page
export const UserProfile: React.FC = () => {

   const formattedUser = JSON.parse(localStorage.getItem("user") || '{}');

   if (!formattedUser) {
      return (
         <div
            className="d-flex justify-content-center"
            style={{ marginTop: "3rem" }}
         >
            <h2>You need to <Link to="/seniorproject/login" >sign in</Link> before you can access this page.</h2>
         </div>
      )
   }

   return (

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
                     Date Created: {formattedUser.dateCreated.substring(0, 10)}
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


   )


}