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

// returns user choice, -1 if invalid
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice; 
    } else {
        return -1; 
    }
}

