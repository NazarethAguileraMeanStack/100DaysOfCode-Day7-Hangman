const wordBank = {};
wordBank.words = [
    "hello",
    "zebra",
    "tiger",
    "elephant",
    "fish",
    "monkey",
    "dolphin",
    "motorcycle",
    "television",
    "skunk",
    "rocket",
    "envelope",
    "cookie",
    "light",
    "love"
];

wordBank.selectRandomWord = function() {
    let index = Math.floor(Math.random() * 15);
    return this.words[index];
};

module.exports = wordBank;