// Variables for divs on HTML
// var possibleLetters = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ""
var possibleLetters = Array = ("abcdefghijklmnopqrstuvwxyz").split("");
// Created seperate var to check if sharing the same array would be an issue...it wasn't..
var computerPossibleLetters = Array = ("abcdefghijklmnopqrstuvwxyz").split("");
// console.log(possibleLetters)
var answer = [];
// Variable for users guess
let userGuess = [];
// Creates random letter selector
let computerChoice = computerPossibleLetters[Math.floor(Math.random() * computerPossibleLetters.length)];
console.log(computerChoice);
var remaining = 15;
var wins = 0;
var lost = 0;
// Variables that hold references to the places in the HTML where it displays things
var directionsText = document.getElementById("directions-text");
// console.log(directionsText)
var remainingText = document.getElementById("remainingGuesses-text");
var incorrectText = document.getElementById("incorrectGuesses-text");
var winsText = document.getElementById("wins-text");
var lostText = document.getElementById("lost-text");

// Create function for key input
document.onkeyup = function (event) {
    // Create variable for event key
    var userInput = event.key;
    // Variable for new game (defualt to true so it starts as a new game)
    var newGame = true
    // Creates random letter selector
    // var computerChoice = computerPossibleLetters[Math.floor(Math.random() * computerPossibleLetters.length)];
    // Display user incorrect guess




    // Logic for resetting guesses to blank
    // document.onkeyup = function () {
    //     if (newGame) {
    //         userGuess();
    //     }
    // }


    // Logic for game
    // NEED!!!! logic to keep computer choice and not reset till 15 tries have been attempted
    if ((userInput === "a") || (userInput === "b") || (userInput === "c") || (userInput === "d") || (userInput === "e") || (userInput === "f") || (userInput === "g") || (userInput === "h") || (userInput === "i") || (userInput === "j") || (userInput === "k") || (userInput === "l") || (userInput === "m") || (userInput === "n") || (userInput === "o") || (userInput === "p") || (userInput === "q") || (userInput === "r") || (userInput === "s") || (userInput === "t") || (userInput === "u") || (userInput === "v") || (userInput === "w") || (userInput === "x") || (userInput === "y") || (userInput === "z")) {
        if (userInput === computerChoice) {
            wins++;
            remaining = 15;
            userGuess = [];
            computerChoice = computerChoice;
        }
        else if (userInput !== computerChoice) {
            remaining--;
            userGuess.push(userInput);
        }
        if (remaining === 0) {
            lost++;
            remaining = 15;
            userGuess = [];
            computerChoice = computerChoice;
        }

        // Hides directions once user types
        directionsText.textContent = "";
        // Inserts game text
        remainingText.textContent = "Remaining guesses: " + remaining;
        // NEED!!!! logic to display 15 userGuesses then refresh when correct or hit the 15 incorrect mark
        incorrectText.textContent = "Incorrect guesses: " + userGuess;
        winsText.textContent = "Total wins: " + wins;
        lostText.textContent = "Total losses: " + lost;
    }

}