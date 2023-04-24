import { FormEvent, useState } from "react"
import { Button, FloatingLabel, Form, } from "react-bootstrap"
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

   // if email already exists
   const [emailExists, setEmailExists] = useState(false);

   // handle login press
   async function registerHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
      event.preventDefault();

      const target = event.currentTarget;

      // assign variables for form data
      const data = {
         email: target.email.value,
         username: target.username.value,
         password: target.password.value,
      };

      // Authorize form data
      // if no error send user to another page
      try {
         const response = await AuthServiceRegister(data.email, data.username, data.password);

         // if error 400 then email already exists
         if (response !== 400) {
            setEmailExists(false);
            navigate("/seniorproject/login");
         }

         setEmailExists(true);

         console.log("Registration Failed.");

      } catch {

      }

   }


   return (

      // FORM
      <div
         className="d-flex justify-content-center"
         style={{ marginTop: '3rem' }}
      >

         <div>

            <div>
               {/* Check if email is valid */}
               {
                  (emailExists)
                     ?
                     <div
                        className="bg-primary"
                        style={{
                           color: "black",
                           fontWeight: "bold",
                           background: "bg-secondary",
                           fontSize: "40px"
                        }}
                     >
                        Email Already Exists
                     </div>
                     : null
               }
            </div>

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
                           pattern="[a-zA-Z0-9!@#$%^*_|]{5,25}"
                           style={{ width: '30rem', marginTop: '1rem' }}
                           required
                        />
                     </FloatingLabel>

                     <Form.Text className="text-muted">
                        Must be longer than 5 & 20 characters
                     </Form.Text>

                  </Form.Group>

                  <Form.Group>

                     <FloatingLabel label="Password">
                        <Form.Control
                           name="password"
                           id="password"
                           type="password"
                           placeholder="Password"
                           pattern="[a-zA-Z0-9!@#$%^*_|]{5,25}"
                           style={{ width: '30rem', marginTop: '1rem' }}
                           required
                        />
                     </FloatingLabel>

                     <Form.Text className="text-muted">
                        Must be longer than 5 & 20 characters
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

      </div>


   )

}