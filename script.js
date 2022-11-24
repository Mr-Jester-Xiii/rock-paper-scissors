console.log('Hello Player');
console.log('Rock, Paper or Scissors?');

let computerChoice;
let playerChoice;

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
    playerEntry = prompt('Rock, Paper or Scissors?', '');
    console.log(playerChoice);

}

getComputerChoice();
getPlayerChoice();




