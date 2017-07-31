var game = {
	wins: 0,
	losses: 0,
	wordBank: ["blueberry", "zealous", "pylon", "corkskrew", "quintessential"],
	currentWord: [],
	numGuess: 5,
	letterGuess: []
}

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