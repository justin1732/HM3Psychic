//For Alphabet array

let alphabet = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
//Variables
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;
var zero = "";

//Functions
var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var newGame = function() {
	guessedLetters = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
    document.getElementById("guesses").innerHTML = "Guesses so far: " + zero;
    }

//User entering
document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == psychicLetter) {
        	wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            window.alert("You win!")
            newGame();
        }
    } else if (left == 0) {
    	losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
        window.alert("You lose...");
        newGame();
    }
};
//Couldn't get the "Guesses so far" text clear. Sorry.