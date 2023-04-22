import { FormEvent } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { signup as AuthServiceSignup } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

// Register form
export const Register = () => {

   const navigate = useNavigate();

   // validate passed username
   function validateUsername(username: string) {

   }

   // validate passed password
   function validatePassword(password: string) {

   }

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
         const response = AuthServiceSignup(data.email, data.username, data.password);

         navigate("/login");

         console.log("Registration was succesful. Moving to login page.");

      } catch {

      }

   }


   return (

      // FORM
      <div 
         className="d-flex justify-content-center" 
         style={{ marginTop: '3rem' }}
      >

         <Form onSubmit={registerHandler} >

            <Form.Group>

               <FloatingLabel label="email">
                  <Form.Control 
                     name="email"
                     id="email"
                     type="email"
                     placeholder="Email"
                     style={{ width: '30rem' }}
                     required
                  />
               </FloatingLabel>

               <FloatingLabel label="username">
                  <Form.Control 
                     name="username"
                     id="username"
                     type="text"
                     placeholder="Username"
                     style={{ width: '30rem', marginTop: '3rem' }}
                     required
                  />
               </FloatingLabel>

               <FloatingLabel label="password">
                  <Form.Control 
                     name="password"
                     id="password"
                     type="password"
                     placeholder="Password"
                     style={{ width: '30rem', marginTop: '3rem' }}
                     required
                  />
               </FloatingLabel>

            </Form.Group>

            <Button variant="primary" type="submit">
               Submit
            </Button>

         </Form>

      </div>


   )

}