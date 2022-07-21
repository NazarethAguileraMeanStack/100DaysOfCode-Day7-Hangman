function revealLetter(letter, word, currentState) {
    let newDisplayWord = "";
    let pointer = 0;
    for (let i = 1; i < currentState.length; i += 2) {
        if (currentState[i] === "_" && word[pointer] === letter) {
            newDisplayWord += ` ${letter}`;
        } else {
            newDisplayWord += ` ${currentState[i]}`;
        }
        pointer++;
    }
    return newDisplayWord;
}

function displayResult(isWinner) {
    if (isWinner) {
        console.log("You Win!");
    } else {
        console.log(`The Answer: ${word}`);
        console.log("You Lose!");
    }
}

function displayBlankLetters(word) {
    let blankWord = "";
    for (let i = 0; i < word.length; i++) {
        blankWord += " _";
    }

    return blankWord;
}

function displayTopInfo(displayWord, numOfIncorrectGuessesRemaining, userLetterGuesses) {
    console.clear();
    console.log("\n");
    console.log(displayWord);
    console.log(`Lives Left: ${numOfIncorrectGuessesRemaining}`);
    if (numOfIncorrectGuessesRemaining === 0) console.log("LAST CHANCE!");
    console.log(`Your Letters: ${userLetterGuesses}`);
}

exports.revealLetter = revealLetter;
exports.displayResult = displayResult;
exports.displayBlankLetters = displayBlankLetters;
exports.displayTopInfo = displayTopInfo;