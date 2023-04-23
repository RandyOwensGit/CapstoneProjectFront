
/**
 * Get currently logged in user's token to be sent to API
 * @returns 
 */

export default function AuthHeader() {

   const userStr = localStorage.getItem("user");

   let user = null;

   if (userStr) {
      user = JSON.parse(userStr);
   }

   if (user && user.accessToken) {
      return {
         Authorization: "Bearer " + user.accessToken
      };

   } else {
      return {
         Authorization: ""
      };
   }

}