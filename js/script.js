const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const inUse = function (word) {
   const inUseLetters =  [];
   for (const letter of word) {
    console.log(letter);
    inUseLetters.push("●");
   }
   wordInProgress.innerText = inUseLetters.join("");
}
guessLetterButton.addEventListener("click", function (e) {
   e.preventDefault();
   message.innerText = "";
   const guess = letterInput.value;
   //console.log(guess);
   const = goodGuess = validateInput(guess);
   if (goodGuess) {
      makeGuess(guess);
   letterInput.value = "";

});

inUseLetters(word);

const playersInput = function (input) {
   const acceptedLetter = /[a-zA-Z]/;
   if (input.length === 0) {
      // Is the input empty?
      message.innerText = "Please enter a letter";
   } else if (input.length > 1) {
      // Did you type more than one letter?
      message.innerText = "Please enter only one letter";
   } else if (!input.match(acceptedLetter)) {
      // Did you type a number, a special character or some other non letter thing?
      message.innerText = "Please enter a letter from A to Z.";
      } else {
         // We finally got single letter, omg yay
         return input;
      }
   };
 
const makeGuess = function (guess) {
   guess = guess.toUpperCase();
   if (guessedLetters.includes(guess)) {
      message.innerText = "You already guessed this letter!";
   } else {
      guessedLetters.push(guess);
      console.log(guessedLetters);
   }

};