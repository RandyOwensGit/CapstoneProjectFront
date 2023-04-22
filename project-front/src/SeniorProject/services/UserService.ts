import AuthHeader from "./AuthHeader";


const API_URL = 'https://senior-project-back.onrender.com/api/test/';

// when accessing content checks if there is a user to be allowed
// AuthHeader class builds the token from user to be displayed for validation

export default new class UserService {

   async getPublicContent() {

      const response = await fetch(API_URL + 'all', {
         headers: AuthHeader()
      });

      if (!response) {
         throw new Error('ERROR - HTTP RESPONSE INVALID ALL - getPublicContent()');
      }

      return await response.json();
   }

}