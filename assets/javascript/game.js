// Variables for divs on HTML
// var possibleLetters = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", ""
var possibleLetters = Array = ("abcdefghijklmnopqrstuvwxyz").split("");
var answer = [];
var remaining = 10;
var wins = 0;
var lost = 0;
// Variable for words
var words = ["mazda", "mitsubish", "ford", "chevy", "pontiac", "mercades", "bmw", "kia", "saab"]
// Variables that hold references to the places in the HTML where it displays things
var directionsText = document.getElementById("directions-display");
var answerText = document.getElementById("answer-display");
var remainingText = document.getElementById("remainingGuesses-display");
var winsText = document.getElementById("answer-display");
var lostText = document.getElementById("correctGuesses-display");

// Create function for key input
document.onkeyup = function (event) {
    // Create variable for event keyl
    var userGuess = event.key;
    // Creates random letter selector
    var computerChoice = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];

    if (userGuess === possibleLetters) {
        if (userGuess === computerChoice) {
            wins++;
        } else if (userGuess !== computerChoice) {
            remaining--;
        } if (remaining === 0) {
            lost++;
        }

        // Hides directions once user types
    directionsText.textContent = "";
    answerText.textContent = computerChoice
    remainingText.textContent = "Remaining guesses: " + remaining;
    winsText.textContent = "Total wins: " + wins;
    lostText.textContent = "Total losses: " + lost;
    }

}