
/**
 * Builds Bearer Token to be passed for authorization to backend
 * @returns Formatted Bearer token
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