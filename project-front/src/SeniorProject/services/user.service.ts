import AuthHeader from "./auth-header";



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

   async getUserBoard() {

      const response = await fetch(API_URL + 'user', {
         headers: AuthHeader()
      });

      if (!response) {
         throw new Error('ERROR - HTTP RESPONSE INVALID USER - getPublicContent()');
      }

      return await response.json();
   }

   async getModeratorBoard() {

      const response = await fetch(API_URL + 'mod', {
         headers: AuthHeader()
      });

      if (!response) {
         throw new Error('ERROR - HTTP RESPONSE INVALID MOD - getPublicContent()');
      }

      return await response.json();
   }

   async getAdminBoard() {

      const response = await fetch(API_URL + 'admin', {
         headers: AuthHeader()
      });

      if (!response) {
         throw new Error('ERROR - HTTP RESPONSE INVALID ADMIN - getPublicContent()');
      }

      return await response.json();
   }

}