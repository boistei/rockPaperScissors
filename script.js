let compScore = 0, playScore = 0, tieScore = 0;
let play = "", comp = "";
let textContent = "";
const scoreBoard = document.querySelectorAll("ul")[1];

const compScoreDisp = document.querySelector("#compScoreDisp");
const playScoreDisp = document.querySelector("#playScoreDisp");
const tieScoreDisp = document.querySelector("#tieScoreDisp");

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", () => {
        play = button.id;
        comp = select();
        game();
    });
}


function select() {
    let selection = ["rock", "paper", "scissors"];
    let rando = Math.floor(Math.random() * 3);
    return selection[rando];
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper"))
        return "Computer";
    else if ((computerSelection === "scissors" && playerSelection === "rock")
        || (computerSelection === "rock" && playerSelection === "paper")
        || (computerSelection === "paper" && playerSelection === "scissors"))
        return "Player";
    else if (computerSelection === playerSelection)
        return "Tie";
}

function game() {
    let winner = playRound(play, comp);
    if (winner === "Computer") {
        compScore++;
        textContent = `Computer wins this round as computer selected ${comp} and ${comp} beats ${play}.`;
    } else if (winner === "Player") {
        playScore++;
        textContent = `Player wins this round as computer selected ${comp} and ${play} beats ${comp}.`;
    } else if (winner === "Tie") {
        tieScore++;
        textContent = `It's a tie!`;
    }
    let scoreUpdate = document.createElement("li");
    scoreUpdate.textContent = textContent;
    scoreBoard.append(scoreUpdate);
    compScoreDisp.textContent = compScore;
    playScoreDisp.textContent = playScore;
    tieScoreDisp.textContent = tieScore;
}