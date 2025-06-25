function getComputerChoice() {
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let choice = prompt("Rock,Paper,Scissor? :")
    return choice;
}

function playRound (humanChoice,computerChoice){
    console.log("Human chose: ", humanChoice);
    console.log("Computer chose: ",computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)