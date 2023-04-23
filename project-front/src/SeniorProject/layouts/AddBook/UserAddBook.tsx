import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";
import { InputHandler } from "./InputHandler";
import { useState } from "react";
import { read_state } from "../../models/ReadStateEnum";
import { addRead } from "../../services/ReadsService";


export const UserAddBook: React.FC<{ book: BookModel }> = (props) => {

   const [readStateValue, setReadStateValue] = useState<read_state>(read_state.NOT_STARTED);
   const [pagesRead, setPagesRead] = useState(0);
   const [customPageCount, setCustomPageCount] = useState(false);
   const [totalPages, setTotalPages] = useState(props.book.pageCount);
   const [customDateStart, setCustomDateStart] = useState(false);
   const [customDateFinished, setCustomDateFinished] = useState(false);
   const [customPageTotal, setCustomPageTotal] = useState(0);

   const initialState = {
      setReadStateValue,
      setCustomDateStart,
      setCustomDateFinished,
   }

   const onSelectCustomPages = (event: React.ChangeEvent<HTMLInputElement>) => {

      if (customPageCount) {
         setCustomPageCount(false);

      } else {
         setCustomPageCount(true);
      }

   }

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

   // get handlers 
   const {
      onChange,
      getCustomStartDate,
      getCustomFinishDate,
      onSubmit,
   } = InputHandler(addUserRead, initialState);

   // function to execute on form submit
   async function addUserRead() {

      addRead(props.book.googleId, readStateValue, totalPages, pagesRead);

   }

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

                  <p style={{ marginTop: "1rem", marginBottom: 0 }}>Author(s):</p> {" "}
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
                     // onSubmit={onSubmit}
                     className="p-3"
                     style={{ height: "100%", width: "100%", textAlign: "center" }}
                  >

                     <h4>Enter & Confirm Book Details:</h4>
                     <p style={{ fontWeight: "normal" }}><em>Due to books often having many different editions you may fit the page count to fit your copy.</em></p>

                     {/* Select read_state */}
                     <Form.Group>

                        <Form.Select
                           id="readStateValue"
                           name="readStateValue"
                           aria-label="Book Progress"
                           onChange={onChange}
                           style={{ width: "20rem" }}
                           required
                           className="mx-auto"
                        >
                           <option>Select Book Progress to Continue</option>
                           <option value={read_state.NOT_STARTED}>Not Started</option>
                           <option value={read_state.READING}>Currently Reading</option>
                           <option value={read_state.FINISHED}>Finished</option>
                        </Form.Select>

                     </Form.Group>
                     {/* End Select read_state */}


                     {/* If user is READING then ask for what page */}
                     {
                        (readStateValue === 1)
                           ?
                           <Form.Group style={{ marginTop: "2rem" }}>
                              <Form.Control
                                 name="pagesRead"
                                 id="pagesRead"
                                 type="text"
                                 placeholder="# of Pages Read (Not Required)"
                                 onChange={((e) => setPagesRead(parseInt(e.target.value)))}
                                 style={{ width: '20rem' }}
                                 className="mx-auto"
                              />
                           </Form.Group>
                           : null
                     }
                     {/* End Get Pages */}


                     {/* If user is READING or FINISHED then ask for start date */}
                     {
                        (readStateValue === 1 || readStateValue === 2)
                           ?
                           <Form.Group style={{ marginTop: "2rem" }}>
                              <Form.Label>Start Date (Not Required)</Form.Label>
                              <Form.Control
                                 name="startDate"
                                 id="startDate"
                                 type="date"
                                 placeholder="Start Date (Not Required)"
                                 onChange={getCustomStartDate}
                                 style={{ width: '20rem' }}
                                 className="mx-auto"
                              />
                           </Form.Group>
                           : null
                     }
                     {/* End Start Date */}


                     {/* If user is FINISHED then ask for end date */}
                     {
                        (readStateValue === 2)
                           ?
                           <Form.Group style={{ marginTop: "2rem" }}>
                              <Form.Label>Finished Date (Not Required)</Form.Label>
                              <Form.Control
                                 name="pagesRead"
                                 id="pagesRead"
                                 type="date"
                                 placeholder="Finished Date (Not Required)"
                                 onChange={getCustomFinishDate}
                                 style={{ width: '20rem' }}
                                 className="mx-auto"
                              />
                           </Form.Group>
                           : null
                     }
                     {/* End End Date */}


                     {/* Checkbox for showing custom page total */}
                     <Form.Group style={{ marginTop: "2rem" }}>
                        <Form.Check
                           name="pickCustomPageTotal"
                           id="pickCustomPageTotal"
                           label="Custom Total Page?"
                           onChange={onSelectCustomPages}
                           style={{ width: '20rem' }}
                           className="mx-auto"
                        />
                     </Form.Group>

                     {
                        (customPageCount)
                           ?
                           <Form.Group style={{ marginTop: "1rem" }}>
                              <Form.Control
                                 name="customPageTotal"
                                 id="customPageTotal"
                                 type="text"
                                 placeholder="Total Pages in Your Book"
                                 onChange={((e) => setTotalPages(parseInt(e.target.value)))}
                                 style={{ width: '20rem' }}
                                 className="mx-auto"
                              />
                           </Form.Group>
                           : null
                     }

                     <Button
                        variant="primary"
                        type="submit"
                        style={{ width: '20rem', marginTop: '2rem' }}
                     >
                        Submit
                     </Button>


                  </Form>

               </div>

            </Col>

         </Row>


      </Container >


   );

}

export { read_state };
