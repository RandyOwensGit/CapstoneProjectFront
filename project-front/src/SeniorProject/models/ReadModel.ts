/**
 * Object to hold API gets from Google API
 * 
 * @returns component
 */

import { read_state } from "./ReadStateEnum";


class ReadModel {

   // test_table column mapping
   google_id: string;
   read_state: read_state;
   total_pages: number;
   pages_read?: number;
   date_started?: Date;
   date_ended?: Date;

   // Constructor to initialize values
   constructor (google_id: string, read_state: read_state, total_pages: number, pages_read?: number, date_started?: Date, date_ended?: Date) {

      // initialize values -- ternary operator to format readState
      this.google_id = google_id;
      this.read_state = read_state;
      this.total_pages = total_pages;
      this.pages_read = pages_read;
      this.date_started = date_started;
      this.date_ended = date_ended;

   }


}
