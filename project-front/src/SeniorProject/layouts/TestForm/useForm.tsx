import { useState } from "react";

/**
 * Display short search results info
 * Search - Total Books - tooltip (search development is in progress..)
 * @returns component
 */

// custom functional component hook to assist with handling form
export const useForm = (callback: any, initialState = {}) => {

   // initialState iniating inputs - holds form data
   const [formData, setFormData] = useState(initialState);

   // event on change for input -- save the state
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData, [event.target.name]: event.target.value})
   };

   const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({...formData, [event.target.name]: event.target.value})
   }

   // execute callback function -- Function inside calling Class
   const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await callback(); 
   };

   // return the hook values
   return {
      onChange,
      onSubmit,
      onSelect,
      formData,
   };

}