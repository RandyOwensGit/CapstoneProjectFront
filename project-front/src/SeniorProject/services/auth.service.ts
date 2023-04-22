

const API_URL = 'https://senior-project-back.onrender.com/api/auth/';

// login post method
export const login = async (username: string, password: string) => {

   // POST data
   const response = await fetch(API_URL + 'signin', {
      method: 'POST',
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify({
         username: username,
         password: password
      })
   });

   console.log("AuthService Login() - Initial Response: " + JSON.stringify(response));

   // check if there is a response
   if (!response) {
      throw new Error('LOGIN ERROR - NO HTTP LOGIN REPONSE');
      
   }

   // turn response into json
   const responseJson = await response.json();

   console.log("AuthService Login() - formatted JSON response: " + JSON.stringify(responseJson));

   // check if token was returned -- assign to localStorage for user
   if (responseJson.accessToken) {
      // response to the localStorage user
      localStorage.setItem("user", JSON.stringify(responseJson));

      console.log("AuthService Login() current localStorage for user: " + localStorage.getItem("user"));
   }

   return responseJson;

}

/**
 * Remove the user token from local storage
 */
export const logout = () => {
   console.log(JSON.stringify(localStorage.getItem("user")));

   localStorage.removeItem("user");

   console.log("AuthService logout(): 'user' removed from localstorage");
   console.log(JSON.stringify(localStorage.getItem("user")));
}

/**
 * Pass signup info to backend API
 * Requires: username, email, password
 */
export const signup = async (email: string, username: string, password: string) => {
   const response = await fetch(API_URL + "signup", {
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
}

/**
 * Pass signup info to backend API
 * Requires: username, email, password
 */
export const getCurrentUser = async () => {
   const userStr = localStorage.getItem("user");

   if (userStr) {
      console.log(JSON.parse(localStorage.getItem("user") || '{}'));

      return JSON.parse(userStr || '{}');
   }

   return null;
}

