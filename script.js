console.log('Hello Player');
console.log('Rock, Paper or Scissors?');

let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computerChoice = 'Rock';
      break;
    case 2:
      computerChoice = 'Paper';
      break;
    case 3:
      computerChoice = 'Scissors';
      break;
  }

  console.log(computerChoice);
}

function getPlayerChoice() {
    playerChoice = prompt('Rock, Paper or Scissors?', '');
}

getComputerChoice();
getPlayerChoice();

function playRound() {
  if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    console.log('Test');
  } else {
    console.log('Test Failed');
  }

}

playRound();







