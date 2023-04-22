import { logout as AuthServiceLogout } from "../../services/AuthService"


/**
 * Logout Component
 * Logs Users Out
 * @returns React Component for Logging Out
 */

export const Logout = () => {

   AuthServiceLogout();

   return (

      // FORM
      <div 
         className="d-flex justify-content-center" 
         style={{ marginTop: '3rem' }}
      >
         <h2>You have been logged out</h2>
      </div>


   )

}