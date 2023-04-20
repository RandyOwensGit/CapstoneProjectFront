import { useEffect, useState } from "react";
import TestModel from "../../models/TestModel";
import { DisplayTable } from "./DisplayTable";

/**
 * Display short search results info
 * Search - Total Books - tooltip (search development is in progress..)
 * @returns component
 */

export default () => {

   // Create a state to hold all the rows from API call as TestModel Objects
   const [tests, setTests] = useState<TestModel[]>([]);

   // state to hold the amount of rows inside API fetch
   const [rows, setRows] = useState(0);

   // useEffect Hook for when state loaded/reloaded
   useEffect(() => {

      // async to wait for backend API return
      const fetchTests = async () => {

         // URL to backend request - dont need any specification yet
         const url: string = "https://senior-project-back.onrender.com/api/tests";

         // hold fetch response
         const response = await fetch(url);

         // check if valid response
         if (!response) {
            throw new Error('ERROR - HTTP RESPONSE INVALID');
         }

         // turn response into json
         const responseJson = await response.json();

         console.log(responseJson);

         // seperate data 
         const responseData = responseJson._embedded.tests;

         // Build Array of TestModel Objects from data
         const testsRows: TestModel[] = [];
         // populate
         for (const key in responseData) {
            // add to array as TestModel Object
            testsRows.push({
               testName: responseData[key].name,
               title: responseData[key].title,
               readState: responseData[key].readState,
               createdDate: responseData[key].dateStarted.substring(0, 10),
            });
         }


         // set testsRows to useState
         setTests(testsRows);
      };

      // handle any HTTP errors
      fetchTests().catch((error: any) => {
         console.log(error.message);
      });

   }, []);



   return (
      <div>

         <h2>Tables Page for displaying from API test_table</h2>

         {/* Pass the array of TestModel Objects gathered by API fetch */}
         <DisplayTable tests={tests} />


      </div>
   );

};
