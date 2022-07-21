const hangman = require("./hangmanArt");
const wordBank = require("./wordBank");
const gameplay = require("./gameplayFunctions");
const prompt = require("prompt-sync")({ sigint: true });


let word = wordBank.selectRandomWord();
let displayWord = gameplay.displayBlankLetters(word);
let numOfIncorrectGuessesRemaining = 6;
let userLetterGuesses = "";
let isWinner = false;



while (numOfIncorrectGuessesRemaining >= 0) {
    gameplay.displayTopInfo(displayWord,numOfIncorrectGuessesRemaining, userLetterGuesses);
    hangman.displayArt(numOfIncorrectGuessesRemaining);  
    
    if (isWinner) break;
    let userGuess = prompt("Guess a letter: ");
    if (word.includes(userGuess)) {
        displayWord = gameplay.revealLetter(userGuess, word, displayWord);
        if (displayWord.includes("_") === false) isWinner = true;
    } else {
        numOfIncorrectGuessesRemaining--;
    }
    userLetterGuesses += ` ${userGuess}`;
}

gameplay.displayResult(isWinner);






