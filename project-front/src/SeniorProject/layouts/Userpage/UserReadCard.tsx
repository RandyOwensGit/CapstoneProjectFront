import { Accordion, Badge, Col, FloatingLabel, Form, ProgressBar, Row } from "react-bootstrap";
import { ReadModel } from "../../models/ReadModel";
import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { GetBookById } from "../../services/GoogleBooksService";
import { ReadState } from "../../models/ReadStateEnum";


/**
 * Build Card from ReadModel Object
 * @param ReadModel Object 
 * @returns 
 */
export const UserReadCard: React.FC<{ reads: ReadModel }> = (props) => {

   const [book, setBook] = useState<BookModel>();
   const [progress, setProgress] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);

   useEffect(() => {

      async function bookInfo() {
         // set value for progress bar
         if (props.reads.readState === ReadState[2]) {
            setProgress(100);

         } else if (props.reads.readState === ReadState[0]) {
            setProgress(0);

         } else {
            // 0-101
            setProgress(Math.floor(Math.random() * 90));
         }

         // obtain book from google API
         const book = await GetBookById(props.reads.googleBookId);

         setBook(book);
      }

      if (!book) {
         bookInfo();
      }

   }, []);

   return (

      <div style={{ marginTop: "10px" }}>

         <ProgressBar striped variant="primary" now={progress} />

         {/* <Card
            bg="primary"
            className="w-100 align-items-center"
            style={{

            }}
         >

            <Card.Header>
               {props.reads.googleBookId}

               <Nav variant="tabs" defaultActiveKey="#first" className="bg-success">
                  <Nav.Item>
                     <Nav.Link href="#first">User Details</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link href="#link">Book Info</Nav.Link>
                  </Nav.Item>
               </Nav>
            </Card.Header>

            <Card.Body className="text-center">
               <Card.Title></Card.Title>

               Google ID: {props.reads.googleBookId}
               <br />
               Progress: {props.reads.readState}
               <br />
               Pages: {props.reads.totalPages}

            </Card.Body>

         </Card> */}
         <Accordion>
            <Accordion.Item eventKey="0">

               <Accordion.Header className="">
                  <div style={{}}>
                     <h5 style={{ display: "inline-block", verticalAlign: "baseline", marginRight: "15px" }}><b>{book?.title}</b></h5>
                     {(props.reads.readState === ReadState[2])
                        ? <i><h5 style={{ display: "inline-block", verticalAlign: "baseline" }} >
                           <Badge bg="success" style={{}}>Finished!</Badge>
                        </h5></i>
                        : null
                     }
                     {(props.reads.readState === ReadState[1])
                        ? <i>Currently Reading</i>
                        : null
                     }
                     {(props.reads.readState === ReadState[0])
                        ? <i>Not Started</i>
                        : null
                     }
                  </div>
               </Accordion.Header>

               <Accordion.Body>
                  <Row>
                     <Col>
                        Page # 
                        <Form 
                           style={{ 
                              display: "inline-block", 
                              verticalAlign: "baseline", 
                              marginLeft: "10px", 
                              marginRight: "10px", 
                              width: "5rem" }}
                           >
                           <Form.Control 
                              type="number" 
                              id="currentPage" 
                              placeholder={"" + currentPage} 
                           />
                        </Form>
                        {props.reads.totalPages}
                     </Col>
                  </Row>
               </Accordion.Body>

            </Accordion.Item>
         </Accordion>


      </div>

   )

}