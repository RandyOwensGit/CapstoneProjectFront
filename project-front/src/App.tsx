import React, { useState } from 'react';
import './App.css';
import HomePage from './layouts/Homepage/HomePage';
import { Capstone } from './layouts/Capstone/Capstone';
import Hangman from './layouts/Hangman/Hangman';


export const App = () => {

   // const for determining if HomePage should be displayed
   const [homePage, setHomePage] = useState(true);

   // const for determining if CapstonePage should be displayed
   const [capstonePage, setCapstonePage] = useState(false);

   // determine if Hangman page should be displayed
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

      <div className="App">
         <header className="App-header">

            {/* Components to be displayed */}

            {/* Display HomePage if targeted */}
            {homePage
               ?
               <div>
                  <HomePage />
                  <button
                     onClick={DisplayCapstone}
                     className='button-85'
                     role='button'
                  >
                     Capstone Project @ WilmU
                  </button>
                  <button style={{ marginLeft: "30px" }}
                     onClick={DisplayHangman}
                     className='button-85'
                     role='button'
                  >
                     While we wait.. A little game?
                  </button>
               </div>
               : null
            }

            {/* Display Capstone if targeted */}
            {capstonePage
               ?
               <div>
                  <Capstone />
                  <button
                     onClick={DisplayHomepage}
                     className='button-85'
                     role='button'
                  >
                     Home Page
                  </button>
               </div>
               : null
            }

            {/* Display Hangman if targeted */}
            {hangmanPage
               ?
               <div>
                  <Hangman />
                  <button style={{ marginTop: "20px" }}
                     onClick={DisplayHomepage}
                     className='button-85'
                     role='button'
                  >
                     Home Page
                  </button>
               </div>
               : null
            }

            

         </header>

      </div>

   );
}

export default App;

