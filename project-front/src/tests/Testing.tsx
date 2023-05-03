import { FormEvent } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"


/**
 * Login Form
 * Logs user in and generates authentication token
 * @returns React Component for Logging in
 */

const external = "https://senior-project-back.onrender.com/api/";
const internal = "http://localhost:8080/api/";

// Login form
export const Testing = () => {

   // handle student create
   async function studentsHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
      event.preventDefault();

      // POST data
      const response = await fetch('' + external + 'students', {
         method: 'POST',
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({
            age: event.currentTarget.age.value,
            firstName: event.currentTarget.firstName.value,
            lastName: event.currentTarget.lastName.value,
            course: '' + external + 'courses/' + event.currentTarget.courseId.value,
         })
      });

      console.log("Add Student Initial Response:");
      console.log(response);

      // turn response into json
      const responseJson = await response.json();
      console.log("Add Student Formatted JSON Response:");
      console.log(responseJson);

   }


   // handle students creation
   async function coursesHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
      event.preventDefault();

      // POST data
      const response = await fetch('' + external + 'courses', {
         method: 'POST',
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({
            courseName: event.currentTarget.courseName.value,
            courseHours: event.currentTarget.courseHours.value,
         })
      });

      console.log("Add Course Initial Response:");
      console.log(response);

      // turn response into json
      const responseJson = await response.json();
      console.log("Add Course Formatted JSON Response:");
      console.log(responseJson);

   }


   return (

      <Container>
         <Row md="auto" className="justify-content-md-center" style={{ marginTop: "50px" }}>
            <Col>

               <Form onSubmit={studentsHandler} >

                  <Form.Group>
                     <Form.Control
                        placeholder="age"
                        type="number"
                        id="age"
                        aria-describedby="age"
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Control
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        aria-describedby="FirstName"
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Control
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        aria-describedby="LastName"
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Control
                        placeholder="Course ID"
                        type="number"
                        id="courseId"
                        aria-describedby="LastName"
                     />
                  </Form.Group>

                  <Button
                     variant="primary"
                     type="submit"
                     style={{ width: '30rem', marginTop: '1rem' }}
                  >
                     Submit Student
                  </Button>

               </Form>

            </Col>

         </Row>

         <br /> <br /> <br />

         <Row md="auto" className="justify-content-md-center">
            <Col>

               <Form onSubmit={coursesHandler} >

                  <Form.Group>
                     <Form.Control
                        placeholder="course"
                        type="text"
                        id="courseName"
                        aria-describedby="course"
                     />
                  </Form.Group>

                  <Form.Group>
                     <Form.Control
                        placeholder="Course Hours"
                        type="number"
                        id="courseHours"
                        aria-describedby="courseHours"
                     />
                  </Form.Group>

                  <Button
                     variant="primary"
                     type="submit"
                     style={{ width: '30rem', marginTop: '1rem' }}
                  >
                     Submit Course
                  </Button>

               </Form>

            </Col>
         </Row>

      </Container >

   )

}