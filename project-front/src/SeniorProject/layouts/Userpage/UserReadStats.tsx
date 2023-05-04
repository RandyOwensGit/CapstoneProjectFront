import { Card, Col, Row } from "react-bootstrap";


/**
 * Build User Stats Card -- 
 * Todo: Make use of User Stats Table
 * @param ReadModel Object 
 * @returns 
 */
export const UserReadStats: React.FC<{totalBooks: number, finishedBooks: number, totalPages: number, readPages: number}> = (props) => {

   // Add Call from Google Books API for extra information

   return (

      <div>
         <Card
            bg="success"
            className="w-100"
            style={{

            }}
         >
            <Card.Header className="align-items-left">
               <h5>Overall Statistics</h5>
            </Card.Header>

            <Card.Body className="">
               <Row>
                  <Col sm={8}>
                     {props.totalBooks} books added 
                     <br />
                     {props.finishedBooks} books finished
                     <br />
                     {props.readPages} out of {props.totalPages} pages read
                  </Col>
                  <Col sm={4} className="align-text-bottom">
                     <input type="date" ></input>
                     To
                     <input type="date" ></input>
                  </Col>
               </Row>
            </Card.Body>

         </Card>
      </div>

   )

}