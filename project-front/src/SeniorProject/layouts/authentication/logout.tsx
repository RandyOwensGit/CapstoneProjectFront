import { logout as AuthServiceLogout } from "../../services/auth.service"


// Login form
export const Logout = () => {

   AuthServiceLogout();

   return (

      // FORM
      <div 
         className="d-flex justify-content-center" 
         style={{ marginTop: '3rem' }}
      >
         Hopefully you have been logged out
      </div>


   )

}