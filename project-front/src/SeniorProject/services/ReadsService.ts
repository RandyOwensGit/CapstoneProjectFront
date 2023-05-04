import { ReadModel } from "../models/ReadModel";

/**
 * Handling communication for user reads
 * 
 * @function addRead
 * @function ... TODO: Get Read by search
 * @function getReads @returns List of User Reads
 * 
 */

const external = "https://senior-project-back.onrender.com/api/";
const internal = "http://localhost:8080/api/";

export const addRead = async (read: ReadModel) => {

   // convert the logged in user to a JSON Object - need user_id
   const user = JSON.parse(localStorage.getItem("user") || '{}');

   const userAccountRequest = '' + external + 'userAccounts/' + user.id;

   const response = await fetch('' + external + 'reads', {
      method: 'POST',
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify({
         googleBookId: read.googleBookId,
         readState: read.readState,
         user: userAccountRequest,
         totalPages: read.totalPages,
      })
   });

   // check for error
   if (!response) {
      throw new Error("Adding Read Failed. addRead() of ReadsService.ts");
   }


}

// get a single read for user


// get all the user reads as list of ReadModel Objects
export const getReads = async () => {

   // convert logged in user to JSON Object for user_id
   const user = JSON.parse(localStorage.getItem("user") || '{}');

   // fetch request
   const response = await fetch(
      '' + external + 'userAccounts/' + user.id + '/reads', {
      method: 'GET',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
   });

   // turn response to json
   const userReadsJsonList = await response.json();

   const userReads: ReadModel[] = [];

   // push all to list
   userReadsJsonList._embedded.reads.map((reads: ReadModel) => {
      userReads.push({
         googleBookId: reads.googleBookId,
         readState: reads.readState,
         totalPages: reads.totalPages,
      });
   })

   // check for error
   if (!response) {
      throw new Error("Fetching Reads Failed. getReads() of ReadsService.ts");
   }

   return userReads;

}

// update total pages
export const setPagesTotal = async (totalPages: number, id: number) => {

   const user = JSON.parse(localStorage.getItem("user") || '{}' );

   

}

// update pages read
export const setPagesRead = async (pagesread: number, id: number) => {


}

