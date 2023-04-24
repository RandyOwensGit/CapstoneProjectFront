// @ts-nocheck
import React from 'react';
import { KeyboardEvent, KeyboardEventHandler, useCallback, useEffect, useState } from "react";
import wordList from './wordList.json';
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";


// Not Relevant towards Senior Project
function getWord() {
   return wordList[Math.floor(Math.random() * wordList.length)];
}

function Hangman() {

   // function on setWordToGuess state
   // get random word from wordList.json
   const [targetWord, setTargetWord] = useState(getWord());

   // const to hold guessed letters
   const [lettersGuessed, setLettersGuessed] = useState<string[]>([]);

   // Letters entered that are do match answer word
   const incorrectLetters = lettersGuessed.filter(
      letter => !targetWord.includes(letter)
   );

   // win/lose condition check
   const isLoser = incorrectLetters.length >= 6;
   // if every iteration of every() loop is true -- it returns true
   const isWinner = targetWord.split("").every(letter =>
       lettersGuessed.includes(letter));


   // callBack to update lettersGuessed but not rerender every keypress
   const addGuessedLetter = useCallback((key: string) => {
      // check if letter already guessed or win state
      if (lettersGuessed.includes(key) || isLoser || isWinner) return;

      setLettersGuessed(currentLetters => [...currentLetters, key])
   }, [lettersGuessed, isWinner, isLoser])

   // listen for keyboardEvent
   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         // assign key value
         const key = e.key;

         // if key is not a-z, not valid
         if(!key.match(/^[a-z]/)) return;

         // call addGuessedLetter -- passing user key
         e.preventDefault();
         addGuessedLetter(key);
      }

      // Add handler event listener to keypress
      document.addEventListener("keypress", handler);

      // remove eventlistener
      return () => {
         document.removeEventListener("keypress", handler);
      }
   }, [lettersGuessed]);

   // listen for enter key -- RESET GAME
   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         // assign key value
         const key = e.key;

         // if key is not enter
         if(key !== "Enter") return;

         e.preventDefault();
         setLettersGuessed([]) // reset guessed letters
         setTargetWord(getWord()); // get new word
      }

      // Add handler event listener to keypress
      document.addEventListener("keypress", handler);

      // remove eventlistener
      return () => {
         document.removeEventListener("keypress", handler);
      }
   }, [lettersGuessed]);
   

   return (

      <div
         style={{
            paddingTop: "0px",
            maxWidth: "50vw",
            minWidth: "50vw",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "unset",
         }}
      >

         <div style={{ fontSize: "2rem", textAlign: "center" }}>
            <b>{isWinner && "Winner! - Refresh or 'enter' key to play again"}
            {isLoser && "Nice try - Refresh or 'enter' key to play again"}</b>
         </div>

         <HangmanDrawing numberOfGuesses={incorrectLetters.length} /> 

         <HangmanWord reveal={isLoser} lettersGuessed={lettersGuessed} targetWord={targetWord} />

         <div style={{ alignSelf: "stretch" }}>
            <Keyboard 
               disabled={isWinner || isLoser}
               activeLetters={lettersGuessed.filter(letter => targetWord.includes(letter))}
               inactiveLetters={incorrectLetters}
               addGuessedLetter={addGuessedLetter}
            />
         </div>


      </div>

   )


}

export default Hangman