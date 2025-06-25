function getComputerChoice() {
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound (humanChoice,computerChoice){

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)