alert("You have Ten guesses");
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

var wins = 0

var losses = 0

var guesses = 10

var computerGuess = letters[Math.floor(Math.random()* letters.length)];

console.log(computerGuess)

document.onkeypress = function(event){
    var userGuess = event.key;

    if (userGuess === computerGuess){
       wins++;
   }
    else {guesses--}

     if (guesses===0){
         losses++}
   }

   document.getElementById("guesses").innerhtml="Guesses left"+ guesses;
   document.getElementById("wins").innerhtml="wins"+ wins;
   document.getElementById("losses").innerhtml="losses"+ losses;
