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
        console.log("tie");
    }
}