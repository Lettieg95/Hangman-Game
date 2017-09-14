
	var Letters= ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	var wins = 0;
 	var losses = 0;
 	var guessesLeft = 10;
 	var guessesSoFar = [];
 	var userGuess = null;
 	console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar);

 	//Algorithm to pick a random letter from the letters array

		var randomLetter = Letters[Math.floor(Math.random() * Letters.length )];

 		// Have computer pick a letter and store it in randomLetter

		console.log("Computer picked the letter: " + randomLetter);


 			document.onkeyup = function(event) {
			
 			// When user presses a key, it records it and saves to userGuess
 			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 			// Add the user's guess to guessesSoFar only if it's not already recorded
 			if (guessesSoFar.indexOf(userGuess) < 0) {
 				guessesSoFar[guessesSoFar.length]=userGuess;
 				guessesLeft--;
 			}
 
 			// if rnadomLetter  is same as userGuess then wins increase by one
 				if (randomLetter == userGuess) {
 					wins++;
 				console.log("You won!");
 			}
 
 			// if guessesLeft gets to 0 then losses increase by one
 			if (guessesLeft == 0) {
 				losses++;
 					console.log("You lost!");
 				}
 				console.log(guessesSoFar);

 				document.getElementById("Wins").innerHTML = "Number of Wins" + "  "+ wins;
 				document.getElementById("Losses").innerHTML = "You've lost" + "  "+  losses;
 				document.getElementById("Lives").innerHTML = "Number of Trys Left:" + "  "+ guessesLeft;
 				document.getElementById("Guesses").innerHTML = "You've guess these letters" + "  "+ guessesSoFar;
 			}