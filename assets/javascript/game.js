
var randomLetter, wins, losses, guessesLeft, guessesSoFar;
    
    wins=0;
    losses=0;

function init (){
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
    
    if (event.key === randomLetter){
        wins++; 
        init();
    } else if (guessesSoFar.length<10){
        guessesLeft= 10 - guessesSoFar.push (event.key);
        console.log (guessesLeft,guessesSoFar)
        updateGuessesLeftValueOnUI(guessesLeft)
        updateguessesSoFarValueOnUI(guessesSoFar)
    } else {
        losses++;
        init();
    }
    
    

    // yes or no
    
    // if no
    // compair guesses so far to how many guesses are left
    // if guesses left =1
    // then game Over
    // losses ++
    // Restart game

    // if guesses left >1
    // decrease guesses left
    // log letter typed into guesses so far (into array)

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

