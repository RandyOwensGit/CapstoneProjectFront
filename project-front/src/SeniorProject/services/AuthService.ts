
/**
 * Handling communication for authorization
 * 
 * @function login
 * @function logout
 * @function register
 * @function getCurrentUser
 * 
 */

const API_URL = 'https://senior-project-back.onrender.com/api/user/';

/**
 * Login POST Request
 * @param username
 * @param password 
 * @returns JSONinfied response or numeric HTTP code
 */
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
 * Removes localStorage("user")
 */
export const logout = () => {

   localStorage.removeItem("user");

}

/**
 * Register POST request
 * @param username
 * @param password 
 * @returns JSONinfied response or numeric HTTP code
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

   // check for error
   if (!response) {
      throw new Error("HTTP - SIGNUP FAILED - AuthService.signup()");
   }

   if (response.status === 400) {
      return 400;
   }

   
}

/**
 * Checks and returns current user in local storage
 * @returns localStorage item
 */
export const getCurrentUser = async () => {
   const userStr = localStorage.getItem("user");

   if (userStr) {
      return JSON.parse(userStr || '{}');
   }

   return null;
}

