import { FormEvent, useEffect, useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { login as AuthServiceLogin } from "../../services/AuthService";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";


/**
 * Login Form
 * Logs user in and generates authentication token
 * @returns React Component for Logging in
 */

// Login form
export const Login = () => {

   const navigate: NavigateFunction = useNavigate();

   const [incorrectInput, setIncorrectInput] = useState(false);

   // Check if user is already logged in
   const [loggedIn, setLoggedIn] = useState(false);
   useEffect(() => {

      if (localStorage.getItem("user") !== null) {
         setLoggedIn(true);

      } else {
         setLoggedIn(false);

      }

   }, [loggedIn]);

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

      // if 401 response then dont send to profile or try to login
      if (response !== 401) {
         navigate("/SeniorProject/Profile");
      }

      setIncorrectInput(true);
   }


   return (

      // FORM
      <div
         className="d-flex justify-content-center"
         style={{ marginTop: '3rem' }}
      >

         <div>

            {/* Check if user is logged in */}
            {
               (loggedIn)
                  ?

                  // Logged in - dont display form
                  // Not Logged In
                  <div
                     className="d-flex justify-content-center"
                     style={{ marginTop: "3rem" }}
                  >
                     <h2>Logged In</h2>
                  </div>

                  :

                  // Show login form
                  <div>
                     {
                        (incorrectInput)
                           ?
                           <div
                              className="d-flex justify-content-center bg-primary"
                              style={{ color: "black", fontWeight: "bold", background: "bg-secondary", fontSize: "50px" }}
                           >
                              INCORRECT INPUT.
                           </div>
                           : null
                     }

                     - User account & Profile Feature currently disabled -

                     <Form
                        onSubmit={loginHandler}
                        className="border border-primary"
                     >

                        <div className="p-3">

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

                              <Form.Text className="text-muted">

                              </Form.Text>

                           </Form.Group>

                           <Form.Group>

                              <FloatingLabel label="password">
                                 <Form.Control
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    style={{ width: '30rem', marginTop: '1.5rem' }}
                                    required
                                 />
                              </FloatingLabel>

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

                        </div>

                     </Form>

                     <div>
                        <Link
                           to="/SeniorProject/registration"
                           className="nav-link text-primary linkHover"
                           aria-current="page"
                           style={{ marginTop: '1rem' }}
                        >
                           Don't have an account? <b>Sign Up</b>
                        </Link>
                     </div>

                  </div>

            }

         </div>

      </div>


   )

}