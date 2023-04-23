
/**
 * 
 */

import { read_state } from "../models/ReadStateEnum";

const API_URL = 'https://localhost:8080/api/reads';


/**
 * Pass signup info to backend API
 * Requires: username, email, password
 */
export const addRead = async (
   google_id: string, 
   read_state: read_state, 
   total_pages: number,
   pages_read?: number,
   date_started?: Date,
   date_ended?: Date,
) => {

   const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
      body: JSON.stringify({
         google_id: google_id,
         read_state: read_state,
         total_pages: total_pages,
         pages_read: pages_read,
         date_started: date_started,
         date_ended: date_ended,
      })
   });

   console.log("Register Response: " + response);

   // check for error
   if (!response) {
      throw new Error("HTTP - SIGNUP FAILED - AuthService.signup()");
   }

   
}