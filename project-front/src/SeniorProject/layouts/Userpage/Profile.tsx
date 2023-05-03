import { Button, Card, Col, Container, Row } from "react-bootstrap";
import img from "../../../assets/profilepic.jpg"
import { useEffect, useState } from "react";
import { NotLoggedIn } from "../UtilLayouts/NotLoggedIn";
import { getReads } from "../../services/ReadsService";
import { ReadModel } from "../../models/ReadModel";
import { UserReadCard } from "./UserReadCard";
import { UserReadStats } from "./UserReadStats";
import { ReadState } from "../../models/ReadStateEnum";

/**
 * Profile Page
 * @returns Profile Page Component
 */

// User Profile Page
export const UserProfile: React.FC = () => {

   const [loggedIn, setLoggedIn] = useState(false);
   const [formattedUser, setFormattedUser] = useState(JSON.parse(localStorage.getItem("user") || '{}'));

   const [listOfReads, setListOfReads] = useState<ReadModel[]>();

   const [totalBooks, setTotalBooks] = useState(0);
   const [finishedBooks, setFinishedBooks] = useState(0);
   const [totalPages, setTotalPages] = useState(0);
   const [readPages, setReadPages] = useState(0);

   const [loading, setLoading] = useState(true);

   useEffect(() => {

      if (localStorage.getItem("user") !== null) {
         setLoggedIn(true);

      } else {
         setLoggedIn(false);
         return;
      }

      async function setProfileStates() {
         // fetch request for user reads
         const userReadsList = await getReads();

         if (userReadsList.length > 0) {
            setListOfReads(userReadsList);
         }

         let finishedBooks = 0;
         let bookPagesTotal = 0;
         let bookPagesRead = 0;
   
         // calculate user stats
         userReadsList.map((item) => {
   
            // finished books increment
            if (item.readState === ReadState[2]) {
               finishedBooks += 1;
            }
   
            // total pages increment
            bookPagesTotal += item.totalPages;
   
            // read pages increment
            if (item.readState === ReadState[2]) {
               bookPagesRead += item.totalPages;
            }
   
         });
   
         // total books
         setTotalBooks((userReadsList.length));
         setFinishedBooks(finishedBooks);
         setTotalPages(bookPagesTotal);
         setReadPages(bookPagesRead);

         setLoading(false);
      }

      // error handling for assignState
      setProfileStates().catch((error: any) => {

      })

      if (loading) {
         setProfileStates();
      }

   }, []);

   // // Return Not Logged In Format
   if (!loggedIn) {
      return <NotLoggedIn />;
   }

   // Logged In Display
   return (

      <div className="text-light">

         <Container
            style={{
               marginTop: "1rem",
               height: "100%",
               width: "100%",
            }}
            className=""
         >

            <Row>
               <UserReadStats totalBooks={totalBooks} finishedBooks={finishedBooks} totalPages={totalPages} readPages={readPages} />
            </Row>

            <Row className="justify-content-md-center" style={{}}>

               {/* USER DETAIL COLUMN */}
               <Col
                  sm={3}
                  className=""
                  style={{
                     marginTop: "0.5rem"
                  }}
               >
                  <Card
                     bg="primary"
                     className=""
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
                           <h2>{formattedUser.username.charAt(0).toUpperCase()}{formattedUser.username.substring(1)} Profile</h2>
                        </Card.Title>
                        Email: {formattedUser.email}
                        <div>
                           Date Created: {formattedUser.dateCreated.substring(0, 10)}
                        </div>

                     </Card.Body>

                     <Card.Footer className="text-center">
                        <Button variant="light">Edit Profile</Button>
                     </Card.Footer>

                  </Card>

               </Col>
               {/* END USER DETAIL COLUMN */}

               {/* DISPLAY READS COLUMN */}
               <Col
                  sm={7}
                  className=""
                  style={{

                  }}
               >

                  {/* Build List of User Reads */}
                  <div style={{ marginTop: "0.5rem" }}>
                     {listOfReads?.map((read) => {
                        return <UserReadCard reads={read} key={read.googleBookId} />;
                     })}
                  </div>

               </Col>
               {/* END DISPLAY READS COLUMN */}

            </Row>


         </Container>

      </div>

   )


}