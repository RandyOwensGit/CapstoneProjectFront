/**
 * Object to hold API gets from Google API
 * 
 * @returns component
 */

import { ReadState } from "./ReadStateEnum";

export interface ReadModel {

   // test_table column mapping
   googleBookId: string;
   readState: ReadState | string;
   totalPages: number;

}
