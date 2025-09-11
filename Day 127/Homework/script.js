let youScore = 0;
let compScore = 0;

let scoreYou = document.getElementById("you");
let scoreComp = document.getElementById("computer");
let result = document.getElementById("result");

let choices = document.querySelectorAll(".choice");

choices.forEach(button => {
    button.addEventListener("click", () => {
        let userChoice = button.dataset.choice;
        let compChoice = getComputerChoice();
        playRound(userChoice, compChoice);
    });
});

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(user, comp) {
    if (user === comp) {
        result.textContent = "Draw! You both chose " + user;
    } else if (
        (user === "Rock" && comp === "Scissors") ||
        (user === "Paper" && comp === "Rock") ||
        (user === "Scissors" && comp === "Paper")
    ) {
        youScore++;
        result.textContent = "You win! " + user + " beats " + comp;
    } else {
        compScore++;
        result.textContent = "Computer wins! " + comp + " beats " + user;
    }

    scoreYou.textContent = "Your score: " + youScore;
    scoreComp.textContent = "Computer score: " + compScore;
}