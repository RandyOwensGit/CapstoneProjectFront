import { FormEvent } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { register as AuthServiceRegister } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

/**
 * Register Form
 * Registers user inside registerHandler()
 * @returns React Component for Registering
 */

// Register form
export const Register = () => {

   const navigate = useNavigate();

   // handle login press
   function registerHandler(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();

      const target = event.currentTarget;

      // assign variables for form data
      const data = {
         email: target.email.value,
         username: target.username.value,
         password: target.password.value,
      };


      console.log("Register Handler Info: " + data);

      // Authorize form data
      // if no error send user to another page
      try {
         const response = AuthServiceRegister(data.email, data.username, data.password);

         navigate("/seniorproject/login");

         console.log("Registration was succesful. Moving to login page.");

      } catch {

      }

   }


   return (

      // FORM
      <div
         className="d-flex justify-content-center"
         style={{
             marginTop: '3rem'
         }}
      >

         <Form 
            onSubmit={registerHandler}
            className="border border-primary"
         >

            <div className="p-3">

            <Form.Group>

               <FloatingLabel label="Email Address">
                  <Form.Control
                     name="email"
                     id="email"
                     type="email"
                     placeholder="Email"
                     style={{ width: '30rem' }}
                     required
                  />
               </FloatingLabel>

               <Form.Text className="text-muted">
                  Requires @ symbol
               </Form.Text>

            </Form.Group>

            <Form.Group>

               <FloatingLabel label="Username">
                  <Form.Control
                     name="username"
                     id="username"
                     type="text"
                     placeholder="Username"
                     style={{ width: '30rem', marginTop: '1rem' }}
                     required
                  />
               </FloatingLabel>

               <Form.Text className="text-muted">
                  Must be longer than 5 characters
               </Form.Text>

            </Form.Group>

            <Form.Group>

               <FloatingLabel label="Password">
                  <Form.Control
                     name="password"
                     id="password"
                     type="password"
                     placeholder="Password"
                     style={{ width: '30rem', marginTop: '1rem' }}
                     required
                  />
               </FloatingLabel>

               <Form.Text className="text-muted">
                  Must be longer than 5 characters
               </Form.Text>

            </Form.Group>

            <Button 
               variant="primary" 
               type="submit"
               className=""
               style={{ width: '30rem', marginTop: '3rem' }}
            >
               Submit
            </Button>

            </div>

         </Form>

      </div>


   )

}