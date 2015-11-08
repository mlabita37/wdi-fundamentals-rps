'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;

    if (playerMove === 'rock' && computerMove === 'scissors' 
    || playerMove === 'scissors' && computerMove === 'paper' 
    || playerMove === 'paper' && computerMove === 'rock') {
        console.log("Player wins!");
        winner = 'player';
        }else if (playerMove === computerMove) {
        winner = 'tie';
        console.log("You tied. Please try again!")
        }else {
        winner = 'computer';
        console.log("Computer wins!");
        }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
var playerWins = 0;
var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove); 
        if (winner === 'player') {
        console.log("Player wins with " + playerMove + " while Computer loses with " + computerMove);
        playerWins ++;
        }else if (winner === 'computer') {
        console.log("Computer wins with " + playerMove + " while Player loses with " + computerMove);
        computerWins ++;
        }else if (winner === 'tie'){
        console.log("It's a tie! You both chose " + playerMove + "!");
        playerWins += 0;
        computerWins += 0;
}
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
}
return [playerWins, computerWins];
}
playToFive();