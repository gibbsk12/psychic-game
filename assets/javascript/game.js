$(document).ready(function () {
    var winCount = 0; //Records the number of wins 
    var lossCount = 0; //Records the number of losses
    var guessesRemaining = 10; //The number of guesses that remain 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Limits user interaction to letters
    var buttonDiv = $("#buttons"); //Get Element by Id for Buttons
    var computerGuess = "";

    //Create a button for each letter of the alphabet
    for (var i = 0; i < alphabet.length; i++){
        var alphaButtons = $("<button>")
        .addClass("btn")
        .text(alphabet[i]);
        buttonDiv.append(alphaButtons);
    }

    $(".btn").click(function(){
        var userInput = this.value;
        console.log(userInput);
    })

    function startNewGame(){
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess)
    }
    



    startNewGame();
})