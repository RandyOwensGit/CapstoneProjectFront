import TestModel from "../../models/TestModel";

/**
 * Build Test Table from /tests endpoint
 * 
 * @returns table
 */

export const DisplayTable: React.FC<{ tests: TestModel[] }> = (props) => {

   return (

      <div className="w-50 mx-auto">
         <table className="table table-dark table-striped table-bordered text-center">  
            <thead>
               <tr>
                  <th>Author</th>
                  <th>Title</th>
                  <th>Progress</th>
                  <th>Date Added</th>
               </tr>
            </thead>
            <tbody>
               {props.tests.map(column => {
                  return (
                     <tr key={column.testName}>
                        <td>{column.testName}</td>
                        <td>{column.title}</td>
                        <td>{formatReadState(column.readState)}</td>
                        <td>{column.createdDate}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>

   );

}

// function to format read state for displaying
function formatReadState(readState: string): string {
   // determine value to be formatted
   if (readState === "not_started") {
      return "Not Started";

   } else if (readState === "reading") {
      return "Reading";

   } else if (readState === "finished") {
      return "Finished";
   }

   return readState;
}