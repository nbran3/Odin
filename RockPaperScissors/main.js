function getHumanChoice() {
    let message = prompt("Choose Rock, Paper, or Scissors:");
    return message;
}


function getComputerChoice() {
    const words = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let humanScore = 0;
let computerScore = 0;


function playRound() {
    const humanChoice = getHumanChoice().toLowerCase(); 
    const computerChoice = getComputerChoice();

    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Computer wins this round!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Human wins this round!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Human wins this round!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Human wins this round!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Computer wins this round!");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Computer wins this round!");
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Invalid input, please choose rock, paper, or scissors.");
    }
}

function playGame() {

    const totalRounds = 5;

    for (let i = 0; i < totalRounds; i++) {
        console.log(`Round ${i + 1}:`);
        playRound();
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}\n`);
    }


    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}


playGame();
