let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5 ){
        return;
    }

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = "Tied";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        message = "You won";
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "rock")
    ) {
        computerScore++;
        message = "You lose";
    } else {
        message = "Invalid input";
    }

    resultDiv.textContent = `Result: ${message} You chose: ${humanChoice} Computer chose: ${computerChoice}`;

    scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        const winner = humanScore === 5 ? "You win!" : "Computer wins!";
        resultDiv.textContent += `\n${winner}`;
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";

const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

rock.addEventListener("click", function () {
    playRound("rock");
});
paper.addEventListener("click", function () {
    playRound("paper");
});
scissor.addEventListener("click", function () {
    playRound("scissor");
});

const container = document.querySelector("#container");

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);
container.appendChild(resultDiv);
container.appendChild(scoreDiv);
