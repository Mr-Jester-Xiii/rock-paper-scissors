//console.log("Hello Player");
//console.log("Rock, Paper or Scissors?");

const userScoreDiv = document.querySelector('.userscore');
const compScoreDiv = document.querySelector('.computerscore');
const message = document.querySelector('.message');

message.textContent = 'Hello Player, Rock, Paper or Scissors?';

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


function playRound() {
  getComputerChoice();
  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    playerScore += 1;
    message.textContent = "You win! " + playerChoice + " beats " + computerChoice;
    userScoreDiv.textContent = "You: " + playerScore;
  } else if (playerChoice == computerChoice) {
    message.textContent = "Its a Tie!"
  } else {
    computerScore += 1;
    message.textContent = "You lose, " + computerChoice + " beats " + playerChoice;
    compScoreDiv.textContent = "Comp: " + computerScore;
  }
}

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click',() => {
playerChoice = "Rock";
playRound();
});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click',() => {
playerChoice = "Paper";
playRound();
});

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click',() => {
playerChoice = "Scissors";
playRound();
});

// function game() {
//   for (let i = 0; i < 5;) {
//     playRound();
//   }
//   if (playerScore > computerScore) {
//     console.log(
//       "Congratulations! You won " + playerScore + " - " + computerScore
//     );
//   } else if (computerScore > playerScore) {
//     console.log("Too bad! You lost " + playerScore + " - " + computerScore);
//   } else {
//     console.log("It's a Draw! " + playerScore + " - " + computerScore);
//   }
//   console.log('Refresh to play again');
// }

// game();
