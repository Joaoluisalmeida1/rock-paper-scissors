console.log("Hello Player I, why are you checking the console?")

// getComputerChoice needs to be a function that randomly, with equal odds, generates a string saying "rock" "tank" or "scissors"
// We need to use math.random() to generate a random number between 0 and 1
// We need to attribute to each play an interval, eg if the number falls between 0 and 0.333(3), it will be rock
// if it falls between 0.33(4) and and 0.66(6) tank, else scissors.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    
    let randomNumber = Math.random();
    let play;
    
    if (randomNumber <= 0.333) {
        play = "rock";
    } else if (randomNumber <= 0.666) {
        play = "tank"
    } else {
        play = "scissors"
    }

    return play;
}

// getHumanChoice will be a function that takes an user prompt
// the function will return that prompt
// set the prompt to lower case so users can write Rock, ROCK or RoCk


// playRound is a function for each round played
// it will have two parameters, human and computer choice
// to set who wins a round:
// if human choice is rock and computer choice is rock, draw; if human choice is rock and computer choice is tank, computer wins; if human is rock and pc is scissors, human wins;
// repeat for human choice of tank and scissors

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        return "draw";
    } else if (humanChoice == "rock" && computerChoice == "tank") {
        return "computer";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "human";
    } else if (humanChoice == "tank" && computerChoice == "scissors") {
        return "human";
    } else if (humanChoice == "tank" && computerChoice == "rock") {
        return "human";
    } else if (humanChoice == "tank" && computerChoice == "tank") {
        return "draw";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "draw";
    } else if (humanChoice == "scissors" && computerChoice == "tank") {
        return "human";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "computer";
    } else {
        console.log("You've inserted an invalid play, cheater.");
        return "invalid";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const container = document.getElementById("container");
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `The current result is: Player I - ${humanScore} vs Computer - ${computerScore}`;
    finalresult.appendChild(resultDiv);

    const updatedScores = () => {
        resultDiv.textContent = `The current result is: Player I - ${humanScore} vs Computer - ${computerScore}`;
    }

    const checkWinner = () => {
        if (humanScore >= 5 || computerScore >= 5) {
            buttons.forEach(button => button.disabled = true);
            const winner = humanScore >= 5 ? 'Player I' : 'Computer';
            alert(`${winner} wins the game! Final score is: \nPlayer I -> ${humanScore} \nvs \nComputer -> ${computerScore}\nReload the page to play again. But why would you?`);
        }
    };


    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
                const humanChoice = button.id;
                const computerChoice = getComputerChoice();
                const result = playRound(humanChoice, computerChoice)

                if (result == 'draw') {
                    alert(`You: ${humanChoice} \nComputer: ${computerChoice} \nResult: It's a Draw!`);
                } else {
                    alert(`You: ${humanChoice} \nComputer: ${computerChoice} \nResult: ${result} wins!`);
                }
                

                if (result === "human") {
                    humanScore++;
                    console.log(`Result: Player I - ${humanScore} vs This stupid game - ${computerScore}`);
                } else if (result === "computer") {
                    computerScore++;
                    console.log(`Result: Player I - ${humanScore} vs This stupid game - ${computerScore}`);
                } else if (result === "draw") {
                    console.log(`Result: Player I - ${humanScore} vs This stupid game - ${computerScore}`);
                } else {
                    console.log(`Result: Player I - ${humanScore} vs This stupid game - ${computerScore}`);
                }
            }
            
            updatedScores();
            checkWinner();
            
        });
    });
});
