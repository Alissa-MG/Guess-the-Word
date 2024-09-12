const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
   const guess = letterInput.value;
   console.log(guess);
   letterInput.value = "";
});

inUseLetters(word);

const playersInput = function (input) {
   const acceptedLetter = /[a-zA-Z]/;
   if ()
}