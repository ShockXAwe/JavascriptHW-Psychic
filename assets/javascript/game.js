// Variables for divs on HTML
// var possibleLetters = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ""
var possibleLetters = Array = ("abcdefghijklmnopqrstuvwxyz").split("");
// Created seperate var to check if sharing the same array would be an issue...it wasn't..
var computerPossibleLetters = Array = ("abcdefghijklmnopqrstuvwxyz").split("");
// console.log(possibleLetters)
var answer = [];
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
document.onkeypress = function (event) {
    // Create variable for event key
    var userGuess = event.key;
    // Creates random letter selector
    var computerChoice = computerPossibleLetters[Math.floor(Math.random() * computerPossibleLetters.length)];
    // Logic for game
    // NEED!!!! logic to keep computer choice and not reset till 15 tries have been attempted
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z"))
        // (userGuess = possibleLetters)
        {
        if (userGuess === computerChoice) {
            wins++;
        }
        else if (userGuess !== computerChoice) {
            remaining--;
        }
        if (remaining === 0) {
            lost++;
            remaining = 15;
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