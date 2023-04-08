import React from 'react';
import styles from "./Keyboard.module.css"

const KEYS = [
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
 ]

 type KeyboardProps = {
   disabled?: boolean;
   activeLetters: string[];
   inactiveLetters: string[];
   addGuessedLetter: (letter: string) => void;
 }

export function Keyboard( {
   disabled=false,
   activeLetters,
   inactiveLetters,
   addGuessedLetter,
} : KeyboardProps) {
   
   return (

      <div style={{ 
         display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(65px, 5fr))",
         gap: ".5rem",
      }}>

         {/* Render each Key from KEYS */}
         {KEYS.map(key => {
            // set style on it depending on has been pressed or not
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
               <button
                  onClick={() => addGuessedLetter(key)}
                  className={`${styles.btn} ${isActive ? styles.active : ""}
                     ${isInactive ? styles.inactive : "" }
                  `} 
                  disabled={isInactive || isActive || disabled}
                  key={key}
               >
                  {key}
               </button>
            )
         })}

      </div>

   )

}