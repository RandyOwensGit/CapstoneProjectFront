import React, { useState } from 'react';
import './App.css';
import HomePage from './layouts/Homepage/HomePage';
import { Capstone } from './layouts/Capstone/Capstone';


export const App = () => {


   const [setPage, pageState] = useState(true);

   const PageDisplay = () => {
      pageState(!setPage);
   }

   return (

      <div className="App">
         <header className="App-header">

            {/* Components to be displayed */}

            {/* Display either Homepage.tsx or Capstone.tsx */}
            {setPage ? <HomePage /> : <Capstone />}

            {/* Button for changing Page */}
            <button onClick={PageDisplay} className='button-85' role='button'>
               {setPage ? 'Capstone Project @ WilmU' : 'Home Page'}
            </button>

            

         </header>

      </div>

   );
}

export default App;
