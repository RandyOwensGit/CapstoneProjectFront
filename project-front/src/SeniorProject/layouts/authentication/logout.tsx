
/**
 * Logout Component
 * Logs Users Out
 * @returns React Component for Logging Out
 */

export const Logout = () => {

   // user can only click logout if they are logged in @ Navbar
   localStorage.removeItem("user");

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