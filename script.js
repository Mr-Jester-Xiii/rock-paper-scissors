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
    playerScore += 1;
    console.log("You win! " + playerChoice + " beats " + computerChoice);
    console.log("You: " + playerScore + " " + "Computer: " + computerScore);
  } else if (playerChoice == computerChoice) {
    console.log("Its a Tie!");
    console.log("You: " + playerScore + " " + "Computer: " + computerScore);
  } else {
    computerScore += 1;
    console.log("You lose, " + computerChoice + " beats " + playerChoice);
    console.log("You: " + playerScore + " " + "Computer: " + computerScore);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (playerScore > computerScore) {
    console.log(
      "Congratulations! You won " + playerScore + " - " + computerScore
    );
  } else if (computerScore > playerScore) {
    console.log("Too bad! You lost " + playerScore + " - " + computerScore);
  } else {
    console.log("It's a Draw! " + playerScore + " - " + computerScore);
  }
  console.log('Refresh to play again');
}

game();
