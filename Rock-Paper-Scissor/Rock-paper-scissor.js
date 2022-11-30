const whoWonEle = document.getElementById("whoWon")
// from options
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorBtn = document.getElementById("scissorBtn")
// from choices
const userChoiceEle = document.getElementById("userChoice")
const AIChoiceEle = document.getElementById("AIChoice")
// from result
const userResultEle = document.getElementById("userResult")
const AIResultEle = document.getElementById("AIResult")

let AIChoice = "";
let userChoice = "";
let userResult = 0;
let AIResult = 0;
// gets a random number and gives random RPS to AIChoice
function getComputerChoice() {
    AINum = Math.floor(Math.random() * 3)
    if (AINum == 0) {
        AIChoice = "ROCK";
    } else if (AINum == 1) {
        AIChoice = "PAPER";
    } else {
        AIChoice = "SCISSOR";
    }
    return AIChoice;
}

function playRound(userChoice, AIChoice) {
    userChoiceEle.innerHTML = userChoice;
    AIChoiceEle.innerHTML = "           " + AIChoice;
    if (userChoice == AIChoice) {
        whoWonEle.textContent = "It's a tie " + userChoice + " ties with " + AIChoice;
    } else {
        if (userChoice == "ROCK") {
            if (AIChoice == "PAPER") {
                AIResult += 1;
                whoWonEle.textContent = "You LOST! " + userChoice + " loses from " + AIChoice;
            } else {
                userResult += 1;
                whoWonEle.textContent = "You WON!!! " + userChoice + " wins over " + AIChoice;
            }
        } else if (userChoice == "PAPER") {
            if (AIChoice == "SCISSOR") {
                AIResult += 1;
                whoWonEle.textContent = "You LOST! " + userChoice + " loses from " + AIChoice;
            } else {
                userResult += 1;

                whoWonEle.textContent = "You WON!!! " + userChoice + " wins over " + AIChoice;
            }
        } else {
            if (AIChoice == "ROCK") {
                AIResult += 1;
                whoWonEle.textContent = "You LOST! " + userChoice + " loses from " + AIChoice;
            } else {
                userResult += 1;
                whoWonEle.textContent = "You WON!!! " + userChoice + " wins over " + AIChoice;
            }
        }
    }
}

function game(userChoice) {
    userChoiceEle.style.opacity = 1
    AIChoiceEle.style.opacity = 1
    AIChoice = getComputerChoice();
    playRound(userChoice, AIChoice)
    AIResultEle.innerHTML = "AI WON: " + AIResult;
    userResultEle.innerHTML = "USER WON: " + userResult;
}
