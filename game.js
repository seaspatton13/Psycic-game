alert("You have Ten guesses");
// declare game variables

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

var wins = 0

var losses = 0

var guesses = 10

var guessesLeft=[10]

var randomLetter = letters[Math.floor(Math.random()* letters.length)];
// log to check that a random letter is being generated 
console.log(randomLetter)
computerGuess= letters[randomLetter]

// id=guesses, wins, losses

document.onkeypress = function(event){
    var userGuess = event.key;
// user guesses correctly
    if (userGuess === computerGuess){
       wins++;
       alert('Winner!!')
       document.getElementById('wins').innerHTML = ++wins;
       guessesLeft= [];
       var randomLetter = letters[Math.floor(Math.random()* letters.length)];
       computerGuess= letters[randomLetter]
       document.getElementById("guesses").innerHTML=10;
       



   }
    // user guess incorrectly

   else {
       document.getElementById("guessesLeft").innerHTML = --guessesLeft;
       guesses.push(userGuess);
       document.getElementById("guesses").innerHTML = guesses 
   }
// user runs out of guesses and the game restarts

     if (guesses===0){
         document.getElementById("losses").innerHTML= ++losses
         alert('loser, GO AGAINE')
         guessesLeft=10;
         guessesLeft=[];
         document.getElementById(guessesLeft).innerHTML= 10;
         guessesLeft= [];
         var randomLetter = letters[Math.floor(Math.random()* letters.length)];
         computerGuess= letters[randomLetter]
         document.getElementById("guesses").innerHTML=10;

     }
   }

   document.getElementById("guesses").innerhtml="Guesses left"+ guesses;
   document.getElementById("wins").innerhtml="wins"+ wins;
   document.getElementById("losses").innerhtml="losses"+ losses;
