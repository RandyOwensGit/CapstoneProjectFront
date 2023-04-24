import { read_state } from "../models/ReadStateEnum";

const API_URL = 'https://senior-project-back.onrender.com/api/reads';


/**
 * Handling communication for user reads
 * 
 * @function addRead
 * @function Read
 * @function getReads
 * 
 */

export const addRead = async (
   googleBookId: string, 
   readState: read_state, 
   totalPages: number,
   pagesRead?: number,
   dateStarted?: Date,
   dateEnded?: Date,
) => {

   // convert the logged in user to a JSON Object - need user_id
   const getUserId = JSON.parse(localStorage.getItem("user") || '{}');

   const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
      body: JSON.stringify({
         googleBookId: googleBookId,
         readState: readState,
         totalPages: totalPages,
         pagesRead: pagesRead,
         dateStarted: dateStarted,
         dateEnded: dateEnded,
         userAccount: getUserId.userId,
      })
   });

   console.log("Register Response: ");
   console.log(response);
   console.log(JSON.stringify(response));

   // check for error
   if (!response) {
      throw new Error("HTTP - SIGNUP FAILED - AuthService.signup()");
   }

   
}