import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";


export const UserAddBook: React.FC<{ book: BookModel }> = (props) => {

   // need to get user
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

   // parse book param into formatted array of BookModel Object
   const bookString = JSON.stringify(props.book);

   const formattedBook = JSON.parse(bookString);

   return (

      <Container
         style={{ marginTop: "5rem", height: "100%", width: "100%" }}
      >
         <Row>

            <Col
               sm={6}
               className="border border-primary"
               style={{

               }}
            >
               <div className="p-3" style={{ height: "100%", width: "100%", textAlign: "center" }}>

                  <h4>Selected Book:</h4>

                  <Image src={formattedBook.image} rounded height="250px" />

                  <p style={{marginTop: "1rem", marginBottom: 0}}>Author(s):</p> {" "}
                  { // Check if more than 1 author
                     (props.book.author.length > 1)
                        ?
                        (props.book.author.map(author =>
                           <p style={{ margin: 0, padding: 0 }}>{author}</p>
                        ))
                        : <p style={{ margin: 0, padding: 0 }}>By {props.book.author}</p>
                  }
                  <br />

                  <p style={{ fontWeight: "normal" }}> 
                     {props.book.description}
                  </p>

               </div>

            </Col>

            <Col
               md={6}
               className=""
               style={{

               }}
            >

               <div className="">

                  <Form
                     // onSubmit={() => }
                     className="p-3"
                     style={{ height: "100%", width: "100%", textAlign: "center" }}
                  >

                     <h4>Enter & Confirm Book Details:</h4>
                     <p style={{ fontWeight: "normal" }}><em>Due to books often having many different editions you may fit the page count to fit your copy.</em></p>

                     <Form.Group>

                        <Form.Control
                           name="username"
                           id="username"
                           type="text"
                           placeholder="Username"
                           style={{ width: '30rem' }}
                           className="mx-auto"
                           required
                        />

                        <Form.Text className="text-muted">

                        </Form.Text>

                     </Form.Group>

                     <Form.Group>

                        <Form.Control
                           name="password"
                           id="password"
                           type="password"
                           placeholder="Password"
                           style={{ width: '30rem', marginTop: '1.5rem' }}
                           className="mx-auto"
                           required
                        />

                        <Form.Text className="text-muted">

                        </Form.Text>

                     </Form.Group>

                     <Button
                        variant="primary"
                        type="submit"
                        style={{ width: '30rem', marginTop: '1rem' }}
                     >
                        Submit
                     </Button>


                  </Form>

               </div>

            </Col>

         </Row>


      </Container>


   );

}