
function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    return (selection[Math.floor(Math.random() *selection.length)])
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection ==='rock' && computerSelection === 'scissors') {
        return 'You win...Rock breaks Scissors';
    }
    else if(playerSelection ==='rock' && computerSelection === 'paper') {
        return 'You lose...Paper covers Rock';
    }
    else if(playerSelection ==='paper' && computerSelection === 'rock') {
        return 'You win...Paper covers Rock';
    }
    else if(playerSelection ==='paper' && computerSelection === 'scissors') {
        return 'You lose...Scissors cuts Paper';
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper') {
        return 'You win...Scissors cuts Paper';
    }
    else if(playerSelection ==='scissors' && computerSelection === 'rock') {
        return 'You lose...Rock breaks Scissors';
    }
    else {
        return 'Draw...you both selected the same'
    }
  }

function game() {
    let maxGames = 5;
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    let gameResult;
    let playerSelection;

    for(games = 1; games <= maxGames; games ++) {
        console.log(`Game: ${games}`);

        playerSelection = prompt("Enter \"Rock\" \"Paper\" or \"Scissors\" to play");
        // playerSelection = 'paper';
        playerSelection = playerSelection.toLowerCase();
        console.log(`Player has selected: ${playerSelection}`);

        const computerSelection = computerPlay().toLowerCase();
        console.log(`Computer has selected: ${computerSelection}`);
    
        gameResult = playRound(playerSelection,computerSelection);
        console.log(gameResult);

        if(gameResult.includes('win')) {
            playerScore++;
            console.log(`Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`);
        }
        else if(gameResult.includes('lose')) {
            computerScore++;
            console.log(`Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`);
        } else {
            draw++;
            console.log(`Player: ${playerScore} Computer: ${computerScore} Draws: ${draw}`);
        }
    }

    console.log(`Game Over`);
    console.log(`Player Final Score: ${playerScore} Computer Final Score: ${computerScore} Total Draws: ${draw}`);
    if(playerScore > computerScore){
        console.log(`Congratulations you win!!`);
    }
    else if(computerScore > playerScore){
        console.log(`You Lose....better luck next time`);
    }
    else{
        console.log(`Game ended in a draw`);
    }

}
  
game();

