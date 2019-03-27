// variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var intitialguesses = 10;
var guessesleft = intitialguesses;
var guessed = [];
// var guessedstart = [];

// creates event at key release
document.onkeyup = function (event) {

  var userguess = event.key;
  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  console.log(userguess);

  var computerguess = letters[Math.floor(Math.random() * letters.length)];
  var winsText = $("wins-text");
  var lossesText = $("losses-text");
  var leftText = $("left-text");
  var guessedText = $("guessed-text")
  // if letter is guessed right you win and increases win column by 1
  if (options.indexOf(userguess) > -1) {

    if (userguess === computerguess) {
      alert("You Win!");
      wins++;
      guessesleft = intitialguesses;
      guessed = [];
    }
    // adds 1 to loss column and resets stats if # of guesses runs out
    else if (guessesleft === 0) {
      alert("Game over!");
      losses++;
      guessesleft = intitialguesses;
      guessed = [];

    }
    // if letter is not correct creates an alert to try again and subtracts 1 from # of guesses
    else {
      console.log("Try Again");
      guessesleft--;
      // pushes keys guessed by user into the empty guesses array
      guessed.push(userguess);
      console.log(guessesleft);
    }
  }
};