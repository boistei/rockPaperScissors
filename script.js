let compScore = 0, playScore = 0, gameOver = false;
let play = "", comp = "";

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    if (!gameOver) {
        button.addEventListener("click", () => {
            play = button.id;
            comp = select();
            game();
            if (playScore === 5 || compScore === 5) {
                gameOver = true;
            }
        });
    }
}


function select() {
    let selection = ["rock", "paper", "scissors"];
    let rando = Math.floor(Math.random() * 3);
    return selection[rando];
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")) {
        return "Computer";
    }
    else if ((computerSelection === "scissors" && playerSelection === "rock")
        || (computerSelection === "rock" && playerSelection === "paper")
        || (computerSelection === "paper" && playerSelection === "scissors")) {
        return "Player";
    }
    else if (computerSelection === playerSelection) {
        return "Tie";
    }
    else return "Invalid!";
}

function game() {
    let winner = playRound(play, comp);
    if (winner === "Computer") {
        compScore++;
        console.log(`Computer wins this round as computer selected ${comp} and ${comp} beats ${play}. Computer: ${compScore}; Player: ${playScore}`);
    } else if (winner === "Player") {
        playScore++;
        console.log(`Player wins this round as computer selected ${comp} and ${play} beats ${comp}. Computer: ${compScore}; Player: ${playScore}`);
    } else if (winner === "Tie") {
        console.log(`It's a tie! Computer: ${compScore}; Player: ${playScore}`);
    } else {
        console.log("Invalid selection. Try again!");
    }
}