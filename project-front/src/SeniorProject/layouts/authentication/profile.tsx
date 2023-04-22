import { getCurrentUser as AuthServiceGetCurrentUser, getCurrentUser } from "../../services/auth.service"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


// User Profile Page
export const UserProfile: React.FC = () => {

   const formattedUser = JSON.parse(localStorage.getItem("user") || '{}');

   return (

      <div
         className=""
         style={{ margin: '10rem' }}
      >

         <header className="jumbotron" >
            <h2><strong>{formattedUser.username}</strong> Profile</h2>
         </header>

         <p>
            <strong>Token:</strong>{" "}
            {formattedUser.accessToken}
         </p>

         <p>
            <strong>Id:</strong>{" "}
            {formattedUser.id}
         </p>

         <p>
            <strong>Email:</strong>{" "}
            {formattedUser.email}
         </p>

         <p>
            <strong>Authorities:</strong>{" "}
            {formattedUser.roles && formattedUser.roles.map((role: any, index: any) => <li key={index}>{role}</li>)}
         </p>


      </div>


   )


}