let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let choice = prompt("Rock,Paper,Scissor? :").toLowerCase();
    return choice;
}

function playRound (humanChoice,computerChoice){
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tied");
    }else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tied");
    }else if (humanChoice == "scissor" && computerChoice == "scissor"){
        console.log("Tied");
    }else if (humanChoice == "rock" && computerChoice == "scissor"){
        humanScore ++;
        console.log("You won");
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore ++;
        console.log("You won");
    }else if (humanChoice == "scissor" && computerChoice == "paper"){
        humanScore ++;
        console.log("You won");
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore ++;
        console.log("You lose");
    }else if (humanChoice == "paper" && computerChoice == "scissor"){
        computerScore ++;
        console.log("You lose");
    }else if (humanChoice == "scissor" && computerChoice == "rock"){
        computerScore ++;
        console.log("You lose");
    }else{
        console.log("Invalid input")
    }

    console.log("Human chose: ", humanChoice);
    console.log("Computer chose: ",computerChoice);
}

for (let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("Final score, You:", humanScore, "Computer:",computerScore)