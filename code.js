const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let resultDisplay;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}))
 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if(randomNumber === 1) {
        computerChoice = 'rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice ) {
        resultDisplay = "It's a draw";
    }

    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay = "You lost";
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay = "You win";
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay = "You lost";
    }
    else if(computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay = "You win";
    }
    else if(computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay = "You lost";
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay = "You win";
    }
    result.innerHTML = resultDisplay;
}