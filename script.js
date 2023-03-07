let compScore = 0, playScore = 0, tieScore = 0;
let maxAttempts = 5;
let play = "", comp = "";
let updateText = "";
const scoreBoard = document.querySelector("ul");

const compScoreDisp = document.querySelector("#compScoreDisp");
const playScoreDisp = document.querySelector("#playScoreDisp");
const tieScoreDisp = document.querySelector("#tieScoreDisp");

const reset = document.querySelector("#reset");

function select() {
    let selection = ["rock", "paper", "scissors"];
    let rando = Math.floor(Math.random() * selection.length);
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
        updateText = `Computer wins this round as computer selected ${comp} and ${comp} beats ${play}.`;
    } else if (winner === "Player") {
        playScore++;
        updateText = `Player wins this round as computer selected ${comp} and ${play} beats ${comp}.`;
    } else if (winner === "Tie") {
        tieScore++;
        updateText = `It's a tie!`;
    }
    let scoreUpdate = document.createElement("li");
    scoreUpdate.textContent = updateText;
    scoreBoard.append(scoreUpdate);
    compScoreDisp.textContent = compScore;
    playScoreDisp.textContent = playScore;
    tieScoreDisp.textContent = tieScore;
}

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", () => {
        play = button.id;
        comp = select();
        game();
        if (playScore === maxAttempts || compScore === maxAttempts) {
            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;
        }
    });
}

reset.addEventListener("click", (e) => {
    compScore = 0, playScore = 0, tieScore = 0;
})