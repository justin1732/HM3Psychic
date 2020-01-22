
// //Variable Setup
// let wins = 0;
// let losses = 0;
// let guessesLeft = 10;
// let guessesLeft = 13;
// let guessesSoFar = [];
// let psychicChoice = "";
// let userGuess = "";

// //Alphabet array. There's an easier way, but I forgot it.
// let alphabet = [
// 			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
// 			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// 			];

// //Time to code!            
// let psychic = () =>  {
// 	psychicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
// 	// console.log(psychicChoice);
// }

// let resetGame = () => {
// 	guessesLeft = 10;
// 	guessesSoFar = [];
// 	psychic();
// };

// document.onkeyup = (event) => {

// 	let userGuess = event.key.toLowerCase();
// 	userGuess = event.key.toLowerCase();

// 	psychic();

// 	console.log(userGuess);


// 	if (userGuess == psychicChoice) {
// 		wins++;
// 		resetGame();
// 		correct++;
// 		alertWin();
//     }
     
//     else (userGuess != psychicChoice) {
// 		guessesLeft--;
// 		guessesSoFar.push(userGuess);
//     }};

var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
				"z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;
var zero = "";

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