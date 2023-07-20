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
            return 0; "Tie, play again!";
        } else if (computerChoice === "paper") {
            return 1;//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return 2;//("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            return 0;//"Tie, play again!";
        } else if (computerChoice === "scissors") {
            return 1;//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return 2;//("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else {
        if (computerChoice === "scissors") {
            return 0;//"Tie, play again!";
        } else if (computerChoice === "rock") {
            return 1;//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            return 2;//("You win! " + playerChoice + " beats " + computerChoice);
         };
    }
};
/*
function game() {
    let playerCount = 0;
    let computerCount = 0;
    for(let i=0; i < 5; i++) {
        let playerChoice = prompt("Make your Choice", " ");
        if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
            let round = playRound(playerChoice);
            if (round === 2) {
                playerCount++;
                console.log("You won this round");
            } else if (round === 1) {
                computerCount++
                console.log("You lost this round");
            } else {
                console.log("It's a tie");
            };
        } else {
            alert("Invalid Choice!");
        };
    };
    if (playerCount > computerCount) {
        console.log("You win!");
    } else if (playerCount < computerCount) {
        console.log("You lose!");
    } else {
        console.log("It's a tie! Play again.");
    };
}
*/