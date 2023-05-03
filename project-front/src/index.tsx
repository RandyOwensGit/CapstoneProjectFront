import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './SeniorProject/PageLayout';
import { PageNotFoundError } from './SeniorProject/layouts/UtilLayouts/PageNotFoundError';
import App from './App';
import { Homepage } from './SeniorProject/layouts/Homepage/Homepage';
import { Inserts } from './SeniorProject/layouts/TestForm/Inserts';
import Tables from './SeniorProject/layouts/TestTable/Tables';
import { AddBook } from './SeniorProject/layouts/AddBook/AddBook';
import { Login } from './SeniorProject/layouts/authentication/login';
import { Register } from './SeniorProject/layouts/authentication/register';
import { UserProfile } from './SeniorProject/layouts/Userpage/Profile';
import { Logout } from './SeniorProject/layouts/authentication/logout';
import { Testing } from './tests/Testing';
import { SteamCompare } from './SteamComparison/SteamCompare';
import { TestingDisplay } from './tests/TestingDisplay';
import { TestingService } from './SeniorProject/services/TestingService';

/**
 * Handles Routing
 * 
 * @returns component
 */

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(

   <div className="bg-light customFont">

      <React.StrictMode>
         <BrowserRouter>
            {/* Use BrowserRouter to create link to host/SeniorProject */}

            <Routes>

               <Route path="/" element={<App />} >
                  <Route index element={<App />} />
                  <Route path="*" element={<PageNotFoundError />} />
               </Route>

               <Route path="/SeniorProject/" element={<PageLayout />} >
                  <Route index element={<Homepage />} />
                  <Route path="Inserts" element={<Inserts />} />
                  <Route path="Tables" element={<Tables />} />
                  <Route path="AddBook" element={<AddBook />} />
                  <Route path="Profile" element={<UserProfile />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Registration" element={<Register />} />
                  <Route path="Logout" element={<Logout/>} />
                  <Route path="Testing" element={<Testing />} />
                  <Route path="TestingService" element={<TestingService />} />
                  <Route path="TestingDisplay" element={<TestingDisplay />} />
                  <Route path="*" element={<PageNotFoundError />} />
               </Route>

               <Route path="/SteamCompare/" element={<SteamCompare />} >
                  <Route index element={<SteamCompare />} />
                  <Route path="*" element={<SteamCompare />} />
               </Route>

            </Routes>

         </BrowserRouter>
      </React.StrictMode>

   </div>

);

