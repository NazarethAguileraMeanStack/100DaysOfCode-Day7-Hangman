const hangman = {};

hangman.start = `
\t+----+
\t|    |
\t     |
\t     |
\t     |
\t     |
\t=========`;

hangman.firstWrongGuess = `
\t+----+
\t|    |
\tO    |
\t     |
\t     |
\t     |
\t=========`;

hangman.secondWrongGuess = `
\t+----+
\t|    |
\tO    |
\t|    |
\t     |
\t     |
\t=========`;

hangman.thirdWrongGuess = `
\t+----+
\t|    |
\tO    |
\t/|   |
\t     |
\t     |
\t=========`;

hangman.fourthWrongGuess = `
\t+----+
\t|    |
\tO    |
\t/|\\  |
\t     |
\t     |
\t=========`;

hangman.fifthWrongGuess = `
\t+----+
\t|    |
\tO    |
\t/|\\  |
\t/    |
\t     |
\t=========`;

hangman.sixthWrongGuess = `
\t+----+
\t|    |
\tO    |
\t/|\\  |
\t/ \\  |
\t     |
\t=========`;

hangman.displayArt = (num) => {
    if (num === 6) console.log(hangman.start);
    if (num === 5) console.log(hangman.firstWrongGuess);
    if (num === 4) console.log(hangman.secondWrongGuess);
    if (num === 3) console.log(hangman.thirdWrongGuess);
    if (num === 2) console.log(hangman.fourthWrongGuess);
    if (num === 1) console.log(hangman.fifthWrongGuess);
    if (num === 0) console.log(hangman.sixthWrongGuess);
};

module.exports = hangman;