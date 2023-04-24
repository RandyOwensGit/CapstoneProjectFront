/**
 * Object to hold API gets from Google API
 * 
 * @returns component
 */

import { read_state } from "./ReadStateEnum";

class ReadModel {

   // test_table column mapping
   googleBookId: string;
   readState: read_state;
   totalPages: number;
   pagesRead?: number;
   dateStarted?: Date;
   dateEnded?: Date;

   // Constructor to initialize values
   constructor (googleBookId: string, readState: read_state, totalPages: number, pagesRead?: number, dateStarted?: Date, dateEnded?: Date) {

      // initialize values -- ternary operator to format readState
      this.googleBookId = googleBookId;
      this.readState = readState;
      this.totalPages = totalPages;
      this.pagesRead = pagesRead;
      this.dateStarted = dateStarted;
      this.dateEnded = dateEnded;

   }


}
