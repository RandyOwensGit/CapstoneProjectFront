import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageLayout } from './SeniorProject/PageLayout';
import { PageNotFoundError } from './SeniorProject/layouts/PageNotFoundError';
import App from './App';
import { UserPage } from './SeniorProject/layouts/UserPage';
import { Homepage } from './SeniorProject/layouts/Homepage';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(

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
               <Route path="UserPage" element={<UserPage />} />
               <Route path="*" element={<PageNotFoundError />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>

);
