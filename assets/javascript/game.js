
  var alphabet=["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var wins=0;
  var losses=0;
  var leftGuesses=10;
  var userGuesses= [];


 
  document.onkeyup = function(event) {
    var userChoice=event.key;
    var options=["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (options.indexOf(userChoice) > -1 ){
        leftGuesses=10;
        userChoice.push([userGuesses]);

        if (userChoice===computerGuess) {
        wins++; 
        leftGuesses=10;
        userChoice.push([userGuesses]);}

        if (userChoice != computerGuess) {
            leftGuesses--;
            userChoice.push([userGuesses]);
        }

        if (leftGuesses===0) {
        losses ++; 
        leftGuesses=10; 

        } 
        
        
    document.getElementById("losses").innerHTML="Losses: " + losses;
    document.getElementById("wins").innerHTML= "Wins: " + wins;
    document.getElementById("leftoverGuesses").innerHTML= "Guesses left: " + leftGuesses;
    document.getElementById("userGuesses").innerHTML= "Your guesses so far: " + userGuesses;
    }
    
  };
