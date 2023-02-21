let selection = ["Rock","Paper","Scissors"];
let compScore = 0, playScore = 0;

function select() {
    return Math.floor(Math.random()*3);
}

function playRound (playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((computerSelection === "rock" && playerSelection === "scissors")
    ||(computerSelection === "paper" && playerSelection === "rock")
    ||(computerSelection === "scissors" && playerSelection === "paper"))
    {
        return "Computer";
    }
    else if ((computerSelection === "scissors" && playerSelection === "rock")
    ||(computerSelection === "rock" && playerSelection === "paper")
    ||(computerSelection === "paper" && playerSelection === "scissors"))
    {
        return "Player";
    }
    else if (computerSelection === playerSelection)
    {
        return "Tie";
    }
    else return "Invalid!";
}

function game () {
    while(compScore < 5 && playScore < 5) {
    let comp = selection[select()];
    let play = prompt("Enter Rock/Paper/Scissors", "Rock");
    let winner = playRound(play,comp);
        if (winner === "Computer") {
            compScore++;
            console.log(`${comp} beats ${play}. Computer wins this round. Computer: ${compScore}; Player: ${playScore}`);
        } else if (winner === "Player") {
            playScore++;
            console.log(`${play} beats ${comp}. Player wins this round. Computer: ${compScore}; Player: ${playScore}`);
        } else if (winner === "Tie") {
            console.log(`It's a tie! Computer: ${compScore}; Player: ${playScore}`);
        } else {
            console.log("Invalid selection. Try again!");
        }
    }    
}

game();