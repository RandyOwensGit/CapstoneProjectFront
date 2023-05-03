import { FormEvent, useState } from "react"
import { Form } from "react-bootstrap"


export const SteamCompare = () => {

   // Const Variables

   const [validId, setValidId] = useState(false);

   // handle form submit for search -- Own Function ?
   function steamIdSubmit(event: FormEvent<HTMLFormElement>): void {
      
      // Search for ID -- confirm if valid


      // if Not valid

   }


   return (

      <div>

         {/* Form To Enter in Steam ID - Own Component */}
         <Form onSubmit={steamIdSubmit}>
            <Form.Group>
               <Form.Control
                  placeholder="Enter Steam ID"
                  type="number"
                  id="age"
                  aria-describedby="age"
               />
               <Form.Label>Steam Profile -{">"} Edit Profile -{">"} (Remove custom URL briefly if you have one set)</Form.Label>
            </Form.Group>
         </Form>


         {/* Display All users game sorted by play time - Own Component*/}


      </div>

   )

}
