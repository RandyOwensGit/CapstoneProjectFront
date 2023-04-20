

/**
 * Build Display for BookModel Object parameter
 * 
 * @returns BookModel Display component
 */

import { FloatingLabel, Form } from "react-bootstrap"

export const SearchBooks = ({callback}: any) => {

   // When button is submitted -- later to be removed ?
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      
      // get input and return it in callback
      callback(event.currentTarget.value);
   }

   return (

      <div className="d-flex justify-content-center" style={{marginTop: '3rem'}}>
         <Form>
            <Form.Group>

               {/* Book Search Input Box */}
               <FloatingLabel label="Start Typing Book Title...">
                  <Form.Control 
                     name="userSearch"
                     id="userSearch"
                     type="text" 
                     placeholder="Start Typing Book Title..." 
                     onChange={onChange}
                     style={{width: '30rem'}}
                  />
               </FloatingLabel>

               {/* Under text tool tip */}
               <Form.Text className="text-muted">
                  Search (This may be a bit... wonk)
                  .. Typing fast also may wonk
               </Form.Text>

            </Form.Group>
         </Form>
      </div>

   )

}