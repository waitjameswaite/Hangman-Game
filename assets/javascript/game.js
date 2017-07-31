var game = {
	wins: 0,
	losses: 0,
	wordBank: ["blueberry", "zealous", "pylon", "corkskrew", "quintessential"],
	currentWord: [],
	numGuess: 5,
	letterGuess: []

}

document.onkeyup = function(event) {
	
	// Sets all user input to lowercase
	var letter = String.formCharCod(event.keycod).toLowerCase();

	// Selects a random word from the game.wordBank
	var game.currentWord = game.wordBank[Math.floor(Math.random() * game.wordBank.length)];

	if (letter === ) {
		// reveal letter in game.currentWord
	}
	else {
		game.numGuess--;
		// push the letter into array game.letterGuess
	}

	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user guesses, revealed words, number of wins/losses, and remaining guesses
	var html =
	  	"<p class="col-xs-6 text-right">Wins:</p>" +
  		"<p class="col-xs-6 text-left">" + game.wins + "</p>" +
  		"<p class="col-xs-6 text-right">Current Word:</p>" +
  		"<p class="col-xs-6 text-left">" + game.currentWord +"</p>" +
  		"<p class="col-xs-6 text-right">Number of Guesses Remaining:</p>" +
  		"<p class="col-xs-6 text-left">" + game.numGuess + "</p>" +
  		"<p class="col-xs-6 text-right">Letters Already Guessed:</p>" +
  		"<p class="col-xs-6 text-left">" + game.letterGuess + "</p>";

  	// Set the inner HTML contents of the #gameContent to our html string
  	document.querySelector("#gameContent").innerHTML = html;

};


// A reveal effect on splash page's <a> tag to hide initial instructions and reveal game data
	window.onload = function() {
	    document.getElementById("revealButton").addEventListener( 'click', changeClass);
	}

	function changeClass() {
	  // Adds .hideContent to #revealButton and #introText
	    document.getElementById("revealButton").className += " hideContent";
	    document.getElementById("introText").className += " hideContent";
	  // Removes .hideContent from .gameContent
	    document.getElementById("gameContent").className = document.getElementById("gameContent").className.replace( /(?:^|\s)hideContent(?!\S)/g , '' );
	}

// Functions for logging user input keys