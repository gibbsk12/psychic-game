$(document).ready(function () {
    var winCount = 0; //Records the number of wins 
    var lossCount = 0; //Records the number of losses
    var guessesRemaining = 10; //The number of guesses that remain 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Limits user interaction to letters
    var buttonDiv = $("#buttons"); //Get Element by Id for Buttons
    var computerGuess = "";

    // Function to choose a letter for the computer
    function pickNewLetter() {
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess)
    }

    pickNewLetter();

    //Create a button for each letter of the alphabet
    function makeButtons() {
        for (var i = 0; i < alphabet.length; i++) {
            var alphaButtons = $("<button>")
                .addClass("btn btn-light")
                .addClass("letter")
                .attr("data-name", alphabet[i])
                .text(alphabet[i]);
            buttonDiv.append(alphaButtons);
        }
    }

    makeButtons();

    function startNewGame() {
        guessesRemaining = 10;
        $("#guessesLeft").html(guessesRemaining)
        pickNewLetter();
    }

    function didYouLose() {
        if (guessesRemaining === 0) {
            alert("You have lost!");
            lossCount++;
            $("#totalLosses").html(lossCount);
            startNewGame();
        } 
    }

    function checkIfRight() {
        var userGuess = $(this).attr("data-name");
        console.log(userGuess);
        if (userGuess === computerGuess) {
            alert("Congratulations! You have won!");
            winCount++
            $("#totalWins").html(winCount);
            startNewGame();
        } else {
            guessesRemaining--;
            $("#guessesLeft").html(guessesRemaining)
            didYouLose();
        }
        $(this).addClass("disabled")
        .attr("disabled", "disabled");
    }


    $(document).on("click", ".letter", checkIfRight);

})