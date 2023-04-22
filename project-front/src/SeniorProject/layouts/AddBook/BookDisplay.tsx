import { Button, Card, Col } from "react-bootstrap";
import BookModel from "../../models/BookModel";
import { Link } from "react-router-dom";
import { UserAddBook } from "./UserAddBook";

/**
 * Build Display for BookModel Object parameter
 * 
 * @returns BookModel Display component
 */

export const BookDisplay: React.FC<{ book: BookModel }> = (props) => {

   return (

      <div className="book" style={{ marginBottom: '30px' }}>

         <Col sm={6} md={4} className="mt-3 .align-items-baseline">

            <Card onClick={() => <Link to="/seniorproject/UserAddBook" />} 
               style={{ width: '14rem', cursor: 'pointer', minHeight: '485px' }} 
               className="bookCard" 
               bg="primary" 
               border="secondary"
            >

               {props.book.image
                  ? <Card.Img variant="top" src={props.book.image} height="290px" />
                  : "No Image For Book Found"
               }

               <Card.Header>
                  <b>
                     {props.book.title}
                  </b>
               </Card.Header>

               <Card.Body>
                  {/* <Card.Title>{props.book.title}</Card.Title> */}
                  { // Check if more than 1 author
                  (props.book.author.length > 1)
                     ? 
                     (props.book.author.map(author =>
                        <Card.Subtitle>{author}</Card.Subtitle>
                     ))
                     : <Card.Subtitle>By {props.book.author}</Card.Subtitle>
                  }
                  {/* <Card.Text className="text-center">
                     <Button variant="success">Select Book</Button>
                  </Card.Text> */}
               </Card.Body>

               <Card.Footer className="text-center">
                  <Button variant="success">
                     Select Book
                  </Button>
               </Card.Footer>

            </Card>
         </Col>

      </div>

   )

}