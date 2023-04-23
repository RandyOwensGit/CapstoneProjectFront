
/**
 * 
 */

const API_URL = 'http://localhost:8080/api/user/';

// login post method
export const login = async (username: string, password: string) => {

   // POST data
   const response = await fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify({
         username: username,
         password: password
      })
   });

   // check if there is a response
   if (!response) {
      throw new Error('LOGIN ERROR - NO HTTP LOGIN REPONSE');
      
   }

   if (response.status === 401) {
      return 401;
   }
 
   // turn response into json
   const responseJson = await response.json();

   // check if token was returned -- assign to localStorage for user
   if (responseJson.accessToken) {
      // response to the localStorage user
      localStorage.setItem("user", JSON.stringify(responseJson));

   }

   return responseJson;

}

/**
 * Remove the user token from local storage
 */
export const logout = () => {

   localStorage.removeItem("user");

}

/**
 * Pass signup info to backend API
 * Requires: username, email, password
 */
export const register = async (email: string, username: string, password: string) => {
   const response = await fetch(API_URL + "register", {
      method: 'POST',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
      body: JSON.stringify({
         username: username,
         email: email,
         password: password
      })
   });

   console.log("Register Response: " + response);

   // check for error
   if (!response) {
      throw new Error("HTTP - SIGNUP FAILED - AuthService.signup()");
   }

   
}

/**
 * 
 * 
 */
export const getCurrentUser = async () => {
   const userStr = localStorage.getItem("user");

   if (userStr) {
      return JSON.parse(userStr || '{}');
   }

   return null;
}

