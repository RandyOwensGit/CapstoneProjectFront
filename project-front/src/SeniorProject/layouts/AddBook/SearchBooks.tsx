

/**
 * Search Book Input
 * 
 * @returns component & search string
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
         <Form onSubmit={event => { event.preventDefault(); }}>
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
                  Search .. Typing fast may be problematic
               </Form.Text>

            </Form.Group>
         </Form>
      </div>

   )

}