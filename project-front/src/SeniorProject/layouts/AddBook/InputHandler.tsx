import { useState } from "react";
import { UserAddBook, read_state } from "./UserAddBook";

/**
 * Universal form handling
 * 
 * @returns hooks for form handling
 */

// custom functional component hook to assist with handling form
export const InputHandler = (callback: any, 
   initialState: {
      setReadStateValue: any,
      setCustomDateStart: any,
      setCustomDateFinished: any,
   }) => {

   // 4 event handlers for form
   const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

      console.log("onChange: " + event.target.value)

      if (event.target.value === "0") {
         initialState.setReadStateValue(read_state.NOT_STARTED);

      } else if (event.target.value === "1") {
         initialState.setReadStateValue(read_state.READING);

      } else if (event.target.value === "2") {
         initialState.setReadStateValue(read_state.FINISHED);

      } else if (event.target.value === "Select Book Progress to Continue") {
         initialState.setReadStateValue(read_state.NOT_STARTED);
         
      }

   }

   const getCustomStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
      // can format date string here

      initialState.setCustomDateStart(event.target.name);
   }

   const getCustomFinishDate = (event: React.ChangeEvent<HTMLInputElement>) => {
      // can format date string here

      initialState.setCustomDateFinished(event.target.name);
   }

   // execute callback function -- Function inside calling Class
   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await callback();
   };

   // return the hook values
   return {
      onChange,
      getCustomStartDate,
      getCustomFinishDate,
      onSubmit
   };

}