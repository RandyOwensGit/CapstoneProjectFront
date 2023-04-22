
// For building token header to be passed to backend API for a verified user
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