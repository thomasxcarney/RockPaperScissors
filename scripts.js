/*
function getComputerChoice will randomly select rock, paper, or scissor
    generate random number between 0 and 2
    0=rock,1=paper, 2=scissors
function playRound takes (playerInput) and computer input and returns string declaring winner

function game() 5 round game that keeps score and reports winner or loser at the end


*/

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3)
    if (choiceNum === 0) {
        return "rock";
    } else if (choiceNum === 1) {
        return "paper";
    } else {
        return "scissors"
    };
}

function playRound (playerInput) {
    let playerChoice = playerInput.toLowerCase();
    let computerChoice = getComputerChoice();
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            return "Tie, play again!";
        } else if (computerChoice === "paper") {
            return ("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return ("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return "Tie, play again!";
        } else if (computerChoice === "scissors") {
            return ("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return ("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else {
        if (computerChoice === "scissors") {
            return "Tie, play again!";
        } else if (computerChoice === "rock") {
            return ("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return ("You win! " + playerChoice + " beats " + computerChoice);
         };
    }
};

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for(var i=0; i < 5; i++) {
        let playerChoice = prompt("Make your Choice", " ");
        if (playerChoice.toLowerCase() == "rock" || "paper" || "scissors") {
            playRound(playerChoice));
        } else {
            alert("Invalid Choice!");
        }
    }
}