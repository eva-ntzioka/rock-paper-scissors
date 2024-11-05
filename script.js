// Step 1
console.log("Hello World");

// Step 2: Gets the computers
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 3: Gets humans choice 
function getHumanChoice() {
    // Prompt the user to enter their choice with "rock" as the default value
    const choice = prompt("Enter rock, paper, or scissors:", "rock").toLowerCase();
    
    // Validate the user input to ensure it's a valid choice
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice, please enter rock, paper, or scissors.");
        return getHumanChoice(); // Retry if the input is invalid
    }
}

// Step 4: Declares score 
let humanScore = 0;
let computerScore = 0;

// Step 5: Plays a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}

// Step 6: Plays the game
function playGame() {
    // Reset the scores before starting a new game
    humanScore = 0;
    computerScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Announce the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Extra Step: Starts the game
playGame();
