//Step 1: Project Structure
console.log("Hello World");

//Step 2: Computers Choise
function getComputersChoice(){
    //Generates a random number between 0 and 1
    const randomNumber = Math.random();
    //Returns rock, paper, or scissors based on that random number
    if (randomNumber < 0.33){
        return "rock";
    }else if (randomNumber < 0.66){
        return "paper";
    }else{
        return "scissors";
    }
}

//Step 3: Humans Choise
function getHumansChoice(){
    //Get the input from the user
    let choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    // Validate users input
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }else{
        //In case of invalid input
        console.log("Your choise was invalid.");
        return getHumansChoice();
    }
}

//Step 4: Players score variables
let humanScore = 0;
let computerScore = 0;

//Step 5: Single Round
function playRound(humansChoice, computersChoice){
    humansChoice = humansChoice.toLowerCase();
    if (humansChoice === computersChoice) {//Tie
        console.log(`We have a tie. You both chose ${humansChoice}`);
    }else if(//Human wins the round
        (computersChoice === "paper" && humansChoice === "rock") ||
        (computersChoice === "scissors" && humansChoice === "paper") ||
        (computersChoice === "rock" && humansChoice === "scissors") 
    ){
        computerScore++;
        console.log(`Opps, you lost... ${computersChoice} beats ${humansChoice}`);
    }else{ //Computer wins the round
        humanScore++;
        console.log(`You won!!! ${humansChoice} beats ${computersChoice}`);
        
    }
}

//Step 6: Play the Game
function playGame(){
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {//play 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore = computerScore){
        console.log(`Score: ${humanScore}, ${computerScore}`);
        console.log("It's a.");
    }else if (computerScore > humanScore){
        console.log("Sorry but you lost...");
    }else{
        console.log("YOU WON! CONGRATULATIONS!");
    }
}