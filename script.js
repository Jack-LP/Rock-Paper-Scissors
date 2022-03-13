const CHOICES = ["rock", "paper", "scissors"]
let playerSelect
let computerSelect
let playerScore = 0
let computerScore = 0
let roundNumber = 1

function game(){
    for(let i = 0; i < 5; i++){
        console.log(`Round ${roundNumber}`);
        roundNumber ++
        playRound()
    }
    console.log(`--- FINAL SCORES ---`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Player score: ${playerScore}`);
    if (computerScore == playerScore) {
        console.log(`It's a tie! you both had ${playerScore} points.`);
    }
    else if (computerScore > playerScore) {
        console.log("You lost, better luck next time");
    } 
    else if (playerScore > computerScore) {
        console.log("Congratulations, you won!");
    }
}

function playRound(computerSelect, playerSelect){
    computerSelect = computerPlay()
    playerSelect = playerPlay()

    if (computerSelect == playerSelect) {
        console.log(`It's a tie! You both chose ${playerSelect}.`);
    } 
    else if (
    (computerSelect == "rock" && playerSelect == "scissors") ||
    (computerSelect == "scissors" && playerSelect == "paper") || 
    (computerSelect == "paper" && playerSelect == "rock")
    ) {
        computerScore ++ 
        console.log(`Computer chose ${computerSelect}, you lose :(`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Player score: ${playerScore}`);
    } 
    else if (
        (computerSelect == "rock" && playerSelect == "paper") ||
        (computerSelect == "scissors" && playerSelect == "rock") || 
        (computerSelect == "paper" && playerSelect == "scissors")
    ) {
        playerScore ++ 
        console.log(`Computer chose ${computerSelect}, you win!`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Player score: ${playerScore}`);
    } else {
        console.log("error");
    }
}

function computerPlay(){
    computerSelect = CHOICES[Math.floor(Math.random() * CHOICES.length)]
    return(computerSelect)
}

function playerPlay(){
    do {
        let playerSelection = prompt("Select rock, paper or scissors")
        playerSelect = playerSelection.toLowerCase()
    } while (
        CHOICES.includes(playerSelect) == false
    )
    return(playerSelect)
}

game()