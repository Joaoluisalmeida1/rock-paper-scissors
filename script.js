console.log("Hello Planet!")

// getComputerChoice needs to be a function that randomly, with equal odds, generates a string saying "rock" "paper" or "scissors"
// We need to use math.random() to generate a random number between 0 and 1
// We need to attribute to each play an interval, eg if the number falls between 0 and 0.333(3), it will be rock
// if it falls between 0.33(4) and and 0.66(6) paper, else scissors.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    
    let randomNumber = Math.random();
    let play;
    
    if (randomNumber <= 0.333) {
        play = "rock";
    } else if (randomNumber <= 0.666) {
        play = "paper"
    } else {
        play = "scissors"
    }

    return play;
}

// getHumanChoice will be a function that takes an user prompt
// the function will return that prompt
// set the prompt to lower case so users can write Rock, ROCK or RoCk

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors, Go!");
    return choice.trim().toLowerCase();
}

// playRound is a function for each round played
// it will have two parameters, human and computer choice
// to set who wins a round:
// if human choice is rock and computer choice is rock, draw; if human choice is rock and computer choice is paper, computer wins; if human is rock and pc is scissors, human wins;
// repeat for human choice of paper and scissors

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
        return "draw";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        return "computer";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return "computer";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "draw";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "draw";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "human";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "computer";
    } else {
        console.log("You've inserted an invalid play, cheater.");
        return "invalid";
    }
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         const result = playRound(humanSelection, computerSelection);

//         if (result === "human") {
//             humanScore++;
//             console.log(`Round ${i + 1}: You win!`);
//         } else if (result === "computer") {
//             computerScore++;
//             console.log(`Round ${i + 1}: I win!`);
//         } else if (result === "draw") {
//             console.log(`Round ${i + 1}: It's a draw!`);
//         } else {
//             console.log(`Round ${i + 1}: Invalid input. No points awarded.`);
//         }

//         console.log("My score: " + computerScore);
//         console.log("Your score: " + humanScore);
//     }

//     if (humanScore > computerScore) {
//         console.log("Congratulations! You won the game!");
//     } else if (computerScore > humanScore) {
//         console.log("Computer wins the game! Better luck next time!");
//     } else {
//         console.log("The game is a draw! Well played!");
//     }
// }

// playGame();

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const container = document.getElementById("container");
    const resultDiv = document.createElement("div");
    resultDiv.textContent = `The current result is: Human - ${humanScore} vs Computer - ${computerScore}`;
    container.appendChild(resultDiv);

    const updatedScores = () => {
        resultDiv.textContent = `The current result is: Human - ${humanScore} vs Computer - ${computerScore}`;
    }

    const checkWinner = () => {
        if (humanScore >= 5 || computerScore >= 5) {
            buttons.forEach(button => button.disabled = true);
            const winner = humanScore >= 5 ? 'Human' : 'Computer';
            alert(`${winner} wins the game! Final score is: Human - ${humanScore} vs Computer - ${computerScore}`);
        }
    };


    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
                const humanChoice = button.id;
                const computerChoice = getComputerChoice();
                const result = playRound(humanChoice, computerChoice)

                alert(`Human: ${humanChoice}, Computer: ${computerChoice}, Result: ${result} wins!`);

                if (result === "human") {
                    humanScore++;
                    console.log(`Result: Human - ${humanScore} vs Computer - ${computerScore}`);
                } else if (result === "computer") {
                    computerScore++;
                    console.log(`Result: Human - ${humanScore} vs Computer - ${computerScore}`);
                } else if (result === "draw") {
                    console.log(`Result: Human - ${humanScore} vs Computer - ${computerScore}`);
                } else {
                    console.log(`Result: Human - ${humanScore} vs Computer - ${computerScore}`);
                }
            }
            
            updatedScores();
            checkWinner();
            
        });
    });
});
