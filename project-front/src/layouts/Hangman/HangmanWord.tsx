import React from 'react';

type HangmanWordProps = {
   lettersGuessed: string[];
   targetWord: string;
   reveal?: boolean;
}

export function HangmanWord( {
   lettersGuessed,
   targetWord,
   reveal = false }: HangmanWordProps ) {

   return (
      <div style={{ 
         display: "flex",
         gap: ".25em",
         fontSize: "6rem",
         fontWeight: "bold",
         textTransform: "uppercase", 
         fontFamily: "monospace",
         color: "#000000",
      }}>

         {/* hide or show each letter of word */}
         {targetWord.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid white" }} key={index}>
               <span style={{ 
                  visibility: 
                     lettersGuessed.includes(letter) || reveal
                     ? "visible"
                     : "hidden",
                  color:
                  // make letters user did not guess red
                     !lettersGuessed.includes(letter) && reveal ?
                     "red" : "white",
               }}>
                  {letter}
               </span>
            </span>
         ))}

      </div>

   )


}