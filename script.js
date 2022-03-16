const CHOICES = ["rock", "paper", "scissors"];
const rulesImg = document.getElementById("rulesImg");
const rulesBtn = document.getElementById("rulesBtn");
const body = document.querySelector('body');
const scoreBoard = document.getElementById("scoreBoardSection");
const buttonSection = document.getElementById("buttonSection");
const choiceText = document.getElementById("choiceText");

rockBtn = document.getElementById("rock");
paperBtn = document.getElementById("paper");
scissorsBtn = document.getElementById("scissors");
choiceBtns = document.querySelectorAll(".choiceBtn");

let playerScore = 0;
let computerScore = 0;

let playerScoreDisplay = document.getElementById("score");
let playerChoiceDisplay = document.getElementById("playerText");
let compChoiceDisplay = document.getElementById("compText");


let playerChoice;
let compChoice;

rulesBtn.onclick = function () {
    if (rulesImg.style.display === "flex") {
      rulesImg.style.display = "none";
      scoreBoard.classList.remove("blur");
      buttonSection.classList.remove("blur");
      choiceText.classList.remove("blur");
    } else {
      rulesImg.style.display = "flex";
      scoreBoard.classList.add("blur");
      buttonSection.classList.add("blur");
      choiceText.classList.add("blur");
    }
};

choiceBtns.forEach(choiceBtn => choiceBtn.addEventListener("click", (e) => {
    playerChoice = e.currentTarget.id;
    playerChoiceDisplay.innerHTML = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    computerPlay();
}));

function computerPlay(){
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    compChoiceDisplay.innerHTML = compChoice[0].toUpperCase() + compChoice.substring(1);
    calcWinner();
}

function calcWinner(){

    if (
        (compChoice == "rock" && playerChoice == "scissors") ||
        (compChoice == "scissors" && playerChoice == "paper") || 
        (compChoice == "paper" && playerChoice == "rock")
        ) {
            computerScore ++; 
    }
    else if (
        (compChoice == "rock" && playerChoice == "paper") ||
        (compChoice == "scissors" && playerChoice == "rock") || 
        (compChoice == "paper" && playerChoice == "scissors")
        ) {
            playerScore ++;
            playerScoreDisplay.innerHTML = playerScore;
    }
    else {
        console.log("error");
    }
}
    


















// const CHOICES = ["rock", "paper", "scissors"]

// paperBtn = document.getElementById("paper")
// scissorsBtn = document.getElementById("scissors")
// rockBtn = document.getElementById("rock")
// playBtn = document.getElementById("play")

// playBtn.addEventListener("click", play)

// function play(){
//     console.log("play");
//     playerChoice()
// }

// function playerChoice(){
//     paperBtn.addEventListener("click", paperSelect); 
//     scissorsBtn.addEventListener("click", scissorsSelect); 
//     rockBtn.addEventListener("click", rockSelect);
// }

// function paperSelect(){
//     let selection = "paper"
//     console.log(playerChoice);
//     computeResults()
//     return selection
// }

// function scissorsSelect(){
//     let selection = "scissor"
//     console.log(playerChoice);
//     computeResults()
//     return selection
// }

// function rockSelect(){
//     let selection = "rock"
//     console.log(playerChoice);
//     computeResults()
//     return selection
// }

// function computerPlay(){
//     computerSelect = CHOICES[Math.floor(Math.random() * CHOICES.length)]
//     return(computerSelect)
// }

// function computeResults(playerSelect, computerSelect){
//     let playerSelect = playerChoice()
//     let computerSelect = computerPlay()
//     if (playerSelect = "hello"){
//         console.log("yep");
//     } else {
//         console.log("nope");
//     }
// }





// const CHOICES = ["rock", "paper", "scissors"]
// let playerSelect
// let computerSelect
// let playerScore = 0
// let computerScore = 0
// let roundNumber = 1

// rockBtn = document.getElementById("rock");
// paperBtn = document.getElementById("paper");
// scissorsBtn = document.getElementById("scissors");

// playBtn = document.getElementById("play").addEventListener("click", game)

// function clicked(){
//     console.log("clicked");
// }

// function game(){
//     for(let i = 0; i < 5; i++){
//         console.log(`Round ${roundNumber}`);
//         roundNumber ++
//         playerPlay()
//     }
//     console.log(`--- FINAL SCORES ---`);
//     console.log(`Computer score: ${computerScore}`);
//     console.log(`Player score: ${playerScore}`);
//     if (computerScore == playerScore) {
//         console.log(`It's a tie! you both had ${playerScore} points.`);
//     }
//     else if (computerScore > playerScore) {
//         console.log("You lost, better luck next time");
//     } 
//     else if (playerScore > computerScore) {
//         console.log("Congratulations, you won!");
//     }
// }

// function playRound(computerSelect, playerSelect){
//     computerSelect = computerPlay()
//     playerSelect = playerPlay()

//     if (computerSelect == playerSelect) {
//         console.log(`It's a tie! You both chose ${playerSelect}.`);
//     } 
//     else if (
//     (computerSelect == "rock" && playerSelect == "scissors") ||
//     (computerSelect == "scissors" && playerSelect == "paper") || 
//     (computerSelect == "paper" && playerSelect == "rock")
//     ) {
//         computerScore ++ 
//         console.log(`Computer chose ${computerSelect}, you lose :(`);
//         console.log(`Computer score: ${computerScore}`);
//         console.log(`Player score: ${playerScore}`);
//     } 
//     else if (
//         (computerSelect == "rock" && playerSelect == "paper") ||
//         (computerSelect == "scissors" && playerSelect == "rock") || 
//         (computerSelect == "paper" && playerSelect == "scissors")
//     ) {
//         playerScore ++ 
//         console.log(`Computer chose ${computerSelect}, you win!`);
//         console.log(`Computer score: ${computerScore}`);
//         console.log(`Player score: ${playerScore}`);
//     } else {
//         console.log("error");
//     }
// }

// function computerPlay(){
//     computerSelect = CHOICES[Math.floor(Math.random() * CHOICES.length)]
//     return(computerSelect)
// }

// function playerPlay(){
//     rockBtn.addEventListener("click", rockSelect);
//     paperBtn.addEventListener("click", paperSelect);
//     scissorsBtn.addEventListener("click", scissorsSelect);
//     // do {
//     //     let playerSelection = prompt("Select rock, paper or scissors")
//     //     playerSelect = playerSelection.toLowerCase()
//     // } while (
//     //     CHOICES.includes(playerSelect) == false
//     // )
// }

// function rockSelect(playerSelect){
//     playerSelect = "rock";
//     return playerSelect;
// }

// function paperSelect(playerSelect){
//     playerSelect = "paper";
//     return playerSelect;
// }

// function scissorsSelect(playerSelect){
//     playerSelect = "scissors";
//     return playerSelect;
// }


