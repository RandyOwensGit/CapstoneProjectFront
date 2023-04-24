import React, { useState } from 'react';
import './App.scss';
import './index.scss';
import HomePage from './layouts/Homepage/HomePage';
import Hangman from './layouts/Hangman/Hangman';
import video from './assets/1080.mp4';
import { Link } from 'react-router-dom';

/**
 * Portfolio Landing Page
 * 
 * @returns Portfolio Component
 */

export const App = () => {

   // const for determining if HomePage should be displayed
   const [homePage, setHomePage] = useState(true);

   // const for determining if CapstonePage should be displayed
   const [capstonePage, setCapstonePage] = useState(false);

   // determine if Hangman page should` be displayed
   const [hangmanPage, setHangmanPage] = useState(false);

   const DisplayHomepage = () => {
      setHangmanPage(false);
      setHomePage(true);
      setCapstonePage(false);
   }

   const DisplayCapstone = () => {
      setHomePage(false);
      setCapstonePage(true);
   }

   const DisplayHangman = () => {
      setHangmanPage(true);
      setHomePage(false);
   }

  
   return (

      <div className="video-container">

         {/* Background Video Container */}
         <div>
            <video loop autoPlay muted>
               <source src={video} type="video/mp4" />
            </video>
         </div>


         <div className="video-background__content">
            {/* Components to be displayed */}

            {/* Display HomePage if targeted */}
               {homePage
                  ?
                  <div>
                     <HomePage />
                     <Link to="/SeniorProject/">
                        <button
                           className='button-85'
                           role='button'
                        >
                           Capstone Project @ WilmU
                        </button>
                     </Link>
                     <button
                        style={{ marginLeft: "30px" }}
                        onClick={DisplayHangman}
                        className='button-85'
                        role='button'
                     >
                        While we wait.. A little game?
                     </button>
                  </div>
                  : null
               }

            {/* Display Hangman if targeted */}
            <div>
               {hangmanPage
                  ?
                  <div>
                     <Hangman />
                     <button style={{ marginTop: "50px" }}
                        onClick={DisplayHomepage}
                        className='button-85'
                        role='button'
                     >
                        Home Page
                     </button>
                  </div>
                  : null
               }
            </div>

         </div>

      </div>

   );
}

export default App;

