console.log('Hello Player');
console.log('Rock, Paper or Scissors?');

let computerChoice;
let playerChoice;

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }

  console.log(computer);
}

getComputerChoice();



