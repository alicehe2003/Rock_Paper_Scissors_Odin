// randomly generates one of "rock", "paper", or "scissors"
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"; 
    } else if (num == 1) {
        return "paper"; 
    } else {
        return "scissors"; 
    }
}

// returns valid user choice, default to rock 
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice; 
    } else {
        return "rock"; 
    }
}

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            ++humanScore; 
        } else if (computerChoice == "paper") {
            ++computerScore; 
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            ++humanScore; 
        } else if (computerChoice == "scissors") {
            ++computerScore; 
        }
    } else {
        if (computerChoice == "rock") {
            ++computerScore; 
        } else if (computerChoice == "paper") {
            ++humanScore; 
        }
    }
} 

const humanSelection = getHumanChoice(); 
const computerSelection = getComputerChoice(); 

playRound(humanSelection, computerSelection); 


