import { FormEvent } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { login as AuthServiceLogin } from "../../services/auth.service";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

// Login form
export const Login = () => {

   const navigate: NavigateFunction = useNavigate();

   // validate passed username
   function validateUsername(username: string) {

   }

   // validate passed password
   function validatePassword(password: string) {

   }

   // handle login press
   async function loginHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
      event.preventDefault();

      const target = event.currentTarget;

      // assign variables for form data
      const data = {
         username: target.username.value,
         password: target.password.value,
      };

      // Authorize form data
      // if no error send user to another page
      const response = await AuthServiceLogin(data.username, data.password);

      navigate("/SeniorProject/Profile");
   }


   return (

      // FORM
      <div
         className="d-flex justify-content-center"
         style={{ marginTop: '3rem' }}
      >

         <Form onSubmit={loginHandler} >

            <Form.Group>

               <FloatingLabel label="username">
                  <Form.Control
                     name="username"
                     id="username"
                     type="text"
                     placeholder="Username"
                     style={{ width: '30rem' }}
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

         <div>
            Don't have a profile?
            <Link to="/SeniorProject/registration" className="nav-link text-secondary" aria-current="page">
               <b>Sign Up</b>
            </Link>
         </div>

      </div>


   )

}