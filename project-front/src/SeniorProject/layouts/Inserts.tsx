import { useForm } from './useForm';

// Class to Insert Data into api/tests -- test_table
export function Inserts() {

   // initial form state
   const initialState = {
      name: "",
      title: "",
      readState: "not_started",
   };

   // grab handlers from useForm.tsx
   const { onChange, onSubmit, onSelect, formData } = useForm(
      addTestRowCallback,
      initialState,
   );

   // function to execute on form submit
   async function addTestRowCallback() {
      // send values to database

      // POST FORM DATA
      await fetch('https://senior-project-back:8080/api/tests', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify( formData )
      });

      console.log(formData);

   }

   return (

      <div className="w-25 mx-auto p-2">
         <h2 style={{ marginTop: 20 }} >Insert record into test_table</h2>

         <form onSubmit={onSubmit} >

            <div className="form-floating mb-3">
               <input 
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Author Name"
                  onChange={onChange}
                  required
                  className="form-control" 
               />
               <label htmlFor="name">Author Name</label>
            </div>

            <div className="form-floating mb-3">
               <input 
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Book Title"
                  onChange={onChange}
                  required
                  className="form-control" 
               />
               <label htmlFor="title">Book Title</label>
            </div>

            <div className="form-floating mb-3">
               <select 
                  name="readState"
                  id="readState"
                  onChange={onSelect}
                  aria-label="Select Reading Progress" 
                  required
                  className="form-select mb-3" 
               >
                  <option value="not_started">Not Started</option>
                  <option value="reading">Currently Reading</option>
                  <option value="finished">Finished</option>
               </select>
               <label htmlFor="readState">Reading Progress</label>
            </div>

            <button type="submit" className="btn btn-primary">
               Submit
            </button>

         </form>
      </div>

   );

}