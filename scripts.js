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
            pushResults(0);//"Tie, play again!";
        } else if (computerChoice === "paper") {
            pushResults(1);//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            pushResults(2);//("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            pushResults(0);//"Tie, play again!";
        } else if (computerChoice === "scissors") {
            pushResults(1);//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            pushResults(2);//("You win! " + playerChoice + " beats " + computerChoice);
         };
    } else {
        if (computerChoice === "scissors") {
            pushResults(0);//"Tie, play again!";
        } else if (computerChoice === "rock") {
            pushResults(1);//("You lose! " + computerChoice + " beats " + playerChoice);
        } else {
            pushResults(2);//("You win! " + playerChoice + " beats " + computerChoice);
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

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});


function pushResults(result) {
    scoreCounter(result);
    const resultText = document.createElement("p");
    resultText.classList.add("roundResults");
    if(result === 0){
        resultText.textContent = "It's a tie!";
    }else if(result === 1){
        resultText.textContent = "You lost!";
    }else resultText.textContent = "You won!";
    const resultContainer = document.querySelector(".results");
    resultContainer.appendChild(resultText);
};

let playerScore = 0;
let computerScore = 0;

function scoreCounter(result){
    if(result == 1){
        computerScore += 1;
    } else if(result == 2){
        playerScore += 1;
    };
    console.log(playerScore, computerScore);
    announceWinner(playerScore, computerScore);
};

function announceWinner(playerScore, computerScore){
    if (playerScore === 5){
        alert("You won the game!");
    } else if (computerScore === 5){
        alert("You lost the game!");
    };
};