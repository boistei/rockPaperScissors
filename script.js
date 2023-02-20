//Create variables for selection
let selection = ["Rock","Paper","Scissors"];
let compScore = 0, playScore = 0;
//Create a function for computer's selection
function computerSelection() {
    return Math.floor(Math.random()*3);
}
//Create a function for player's selection
function playerSelection() {
    return Math.floor(Math.random()*3);
}
//Assign them to variables
while(compScore < 5 && playScore < 5){
    let comp = selection[computerSelection()];
    let play = selection[playerSelection()];
    //Check if both are working fine.
    console.log(`The computer chose ${comp} and the player chose ${play}`);
    //Scenarios where computer wins
    if ((comp === "Rock" && play === "Scissors")
    ||(comp === "Paper" && play === "Rock")
    ||(comp === "Scissors" && play === "Paper"))
    {
        compScore++;
        console.log(`As computer picked ${comp} and player picked ${play}, computer wins!`);
        console.log(`Computer: ${compScore}; Player: ${playScore}`);
    }
    //Scenarios where player wins
    else if ((comp === "Scissors" && play === "Rock")
    ||(comp === "Rock" && play === "Paper")
    ||(comp === "Paper" && play === "Scissors"))
    {
        playScore++;
        console.log(`As computer picked ${comp} and player picked ${play}, player wins!`);
        console.log(`Computer: ${compScore}; Player: ${playScore}`);
    }
    //Scenarios where it is a tie
    else if (play === comp)
    {
        console.log(`It's a tie!`);
        console.log(`Computer: ${compScore}; Player: ${playScore}`);
    }
}