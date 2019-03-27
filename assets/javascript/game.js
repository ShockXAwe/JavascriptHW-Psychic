// Variables for divs on HTML
var wins = 0;
var answer = [];
var correct = [];
var remaining = 10;
// Variable for words
var words = ["mazda","mitsubish","ford","chevy","pontiac","mercades","bmw","kia","saab"]
// Variables that hold references to the places in the HTML where it displays things
var winsText = document.getElementById("wins-display");
var answerText = document.getElementById("answer-display");
var correctText = document.getElementById("correctGuesses-display");
var remainingText = document.getElementById("remainingGuesses-display");

// Create function for key input
document.onkeyup = function(event) {
    // Create variable for event keyl
    var userGuess = event.key;

    
}