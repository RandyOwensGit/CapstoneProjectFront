
/**
 * Pull from Google Books API a maximum of 10 results holding props book title
 * 
 * @returns BookModel[] -- Array of BookModel Objects
 */

import BookModel from "../../models/BookModel";

export const GetBooks = async (search: string) => {

   return await apiBooks(search);

}

async function apiBooks(search: string) {

   // URL to Google Books Public API -- with search from user as query
   // Google Books API only allows 40 objects reponse -- can iterate over the rest but probably not required
   const url: string = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&maxResults=20";

   // hold fetch response
   const response = await fetch(url);

   // check if valid response
   if (!response) {
      throw new Error('ERROR - HTTP RESPONSE INVALID');
   }

   // create JSON data object from response
   const responseJson = await response.json();

   // seperate data 
   const responseData = responseJson.items;

   // Build array of BookModel Objects with required information
   const responseBooks: BookModel[] = [];

   // populate books array IF title actually includes title
   for (const key in responseData) {

      // Wrap API assignments inside try catch
      // some books will be missing elements -- skip them
      try {

         // check if API call contains required elements
         if (((responseData[key].volumeInfo.title).toLowerCase()).includes(search.toLowerCase())) {
            // check if there are any authors
            if (typeof responseData[key].volumeInfo.authors === 'undefined') {
               throw Error("No Authors - Invalid Book");
            }

            // add to books array
            responseBooks.push({
               title: responseData[key].volumeInfo.title,
               subTitle: responseData[key].volumeInfo.subtitle,
               image: responseData[key].volumeInfo.imageLinks.smallThumbnail,
               description: responseData[key].volumeInfo.description,
               pageCount: responseData[key].volumeInfo.pageCount,
               author: responseData[key].volumeInfo.authors,
            });
         }

      } catch (e) {
         console.error(e + "\n-- Book is missing required value");
      }

   }

   return responseBooks;

}
