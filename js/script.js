const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const remainingGuesses === 8;
const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
   const placeholderLetters =  [];
   for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
   }
   wordInProgress.innerText = placeholderLetters.join("");
};

   placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
   e.preventDefault();
   message.innerText = "";
   const guess = letterInput.value;
   //console.log(guess);
   const goodGuess = playersInput(guess);
   
   if (goodGuess) {
      makeGuess(guess);
   }
   letterInput.value = "";
});



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
      showGuessedLetters();
      updateGuessesRemaining(guess);
      updateWordInProgress(guessedLetters);
   }
};

const showGuessedLetters = function () {
   guessedLettersElement.innerHTML= "";
   for (const letter of guessedLetters) {
         const li = document.createElement("li");
         li.innerText = letter;
         guessedLettersElement.append(li);
   }
};

const updateWordInProgress = function (guessedLetters) {
   const wordUpper = word.toUpperCase();
   const wordArray = wordUpper.split("");
   const revealWord = [];
   for (const letter of wordArray) { 
      if (guessedLetters.includes(letter)) {
         revealWord.push(letter.toUpperCase());
   } else {
      revealWord.push("●");
      }
   }
   wordInProgress.innerText = revealWord.join("");
   checkIfWin();
};


const updateGuessesRemaining = function (guess) {
   const upperWord = word.toUpperCase();
   if (!upperWord.includes(guess)) {
      message.innerText = `Sorry, the word has no ${guess}.`;
      remainingGuesses -= 1;
   } else {
      message.innerText = `Good job, the word has a ${guess}!`;
   }  if (remainingGuesses === 0) {
      message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
   } else if  (remainingGuesses === 1) {
      remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
   } else { 
      remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;   
   }
};

const checkIfWin = function () {
   if (word.toUpperCase() === wordInProgress.innerText) {
      message.classList.add("win");
      message.innerHTML = `<p class="highlight"> You guessed the correct word! Congrats!</p>`;
   }
};