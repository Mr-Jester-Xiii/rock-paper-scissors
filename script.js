console.log("Hello Player");
console.log("Rock, Paper or Scissors?");

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }

  console.log(computerChoice);
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Paper or Scissors?", "");
}

function playRound() {
  getComputerChoice();
  getPlayerChoice();
  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    console.log("You win! " + playerChoice + " beats " + computerChoice);
  } else {
    console.log("You lose, " + computerChoice + " beats " + playerChoice);
  }
}

playRound();
