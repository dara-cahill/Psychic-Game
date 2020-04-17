
var randomLetter, wins, losses, guessesLeft, guessesSoFar;

function init (){
    wins=0;
    losses=0;
    guessesLeft=10;
    guessesSoFar=[];
    console.log ("Initializing Game", wins, losses,guessesLeft,guessesSoFar)
    updateWinValueOnUI(wins);
    updateLossesValueOnUI(losses);
    updateGuessesLeftValueOnUI(guessesLeft);
    updateguessesSoFarValueOnUI(guessesSoFar);
    randomLetter = pickRandomLetter();

}

function pickRandomLetter(){
    return 'A'; //TODO Comeback and do Math.Floor thing...
}

document.onkeyup = function(event){
    console.log(event.key)

    // Decide if its the same letter
    // yes or no
    // if yes wins ++, pick new random letter, reset guesses back to 10, clear guesses so far
    
    // if no
    // compair guesses so far to how many guesses are left
    // if guesses left =1
    // then game Over
    // losses ++
    // Restart game

    // if guesses left >1
    // decrease guesses left
    // log letter typed into guesses so far (into array)




    var computerChoice = 
    if 

}



// Use this function to update the win value on UI
// Note: This does not calculate the win value, simply updates the UI with the argument passed to it.
function updateWinValueOnUI (newWinValue){
    document.getElementById("w").innerHTML = newWinValue;
}

function updateLossesValueOnUI (newLossesValue){
    document.getElementById("l").innerHTML = newLossesValue;
}

function updateGuessesLeftValueOnUI (newGuessesLeftValue){
    document.getElementById("gL").innerHTML = newGuessesLeftValue;
}

function updateguessesSoFarValueOnUI (newguessesSoFarValue){
    document.getElementById("gSF").innerHTML = newguessesSoFarValue;
}
init();

// 1.List of letters for the computer to pull from 
// 2.Generate a random number based on list of letters length
// 3.
