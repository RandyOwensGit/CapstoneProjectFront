import { Link } from "react-router-dom"

export const NotLoggedIn: React.FC = () => {

   return (

      // Not Logged In
      <div
         className="d-flex justify-content-center"
         style={{ marginTop: "3rem" }}
      >
         <h2>You need to <Link to="/seniorproject/login" >sign in</Link> before you can access this page.</h2>
      </div>

   )

}