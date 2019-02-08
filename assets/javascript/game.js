
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  var wins=0;
  var losses=0;
  var leftGuesses=10;
  var userGuesses=[];

  var cGText=document.getElementById("computer-Guess");
  var losText=document.getElementById("losses");
  var winText=document.getElementById("wins");
  var leftoverGsText=document.getElementById("leftoverGuesses");
  var userGsText=document.getElementById("userGuesses");

  var userChoices=document.onkeyup = function(event) {

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


    if
  };

