const userScoreDiv = document.querySelector(".userscore");
const compScoreDiv = document.querySelector(".computerscore");
const message = document.querySelector(".message");

// message.textContent =
//   "Hello Player, Rock, Paper or Scissors? First to 5 points wins!";

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

  //console.log(computerChoice);
}

function disableBtn() {
  rockbtn.disabled = true;
  paperbtn.disabled = true;
  scissorsbtn.disabled = true;
}

function refreshGame() {
  const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", () => {
    window.location.reload();
  });

  resetBtn.style.display = block;
}

function removePlayerTransition() {
  userScoreDiv.classList.remove('playerpoint');
}

function removeCompTransition() {
  compScoreDiv.classList.remove('comppoint');
}


function playRound() {
  getComputerChoice();
  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    playerScore += 1;
    message.textContent =
      "You win! " + playerChoice + " beats " + computerChoice;
    userScoreDiv.textContent = "Player: " + playerScore;
    userScoreDiv.classList.add('playerpoint');
    setTimeout(removePlayerTransition, 300);
  } else if (playerChoice == computerChoice) {
    message.textContent = "Its a Tie!";
  } else {
    computerScore += 1;
    message.textContent =
      "You lose, " + computerChoice + " beats " + playerChoice;
    compScoreDiv.textContent = "Computer: " + computerScore;
    compScoreDiv.classList.add('comppoint');
    setTimeout(removeCompTransition, 300);
  }

  if (playerScore === 5) {
    message.textContent =
      "Congratulations! You won " + playerScore + " - " + computerScore;
    message.classList.add('playerpoint');
    compScoreDiv.classList.add('comppoint');
    disableBtn();
    refreshGame();
  } else if (computerScore === 5) {
    message.textContent =
      "Too bad! You lost " + playerScore + " - " + computerScore;
      message.classList.add('comppoint');
    disableBtn();
    refreshGame();
  } else {
    console.log();
  }
  //console.log(computerScore);
  //console.log(playerScore);
}

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", () => {
  playerChoice = "Rock";
  playRound();
});

const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", () => {
  playerChoice = "Paper";
  playRound();
});

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", () => {
  playerChoice = "Scissors";
  playRound();
});
