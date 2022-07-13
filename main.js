const playerBtns = document.querySelectorAll(".selection-btn");
const playerBtnArr = [...playerBtns];
const resultsCon = document.querySelector("#results-con");
const resultPara = document.querySelector("#result-para");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundTracker = document.querySelector("#round-tracker");

for (const playerBtn of playerBtnArr){
    playerBtn.addEventListener("click", () => {
        let playerNum = parseInt(playerScore.textContent);
        let computerNum = parseInt(computerScore.textContent);
        const gameEnd = checkGame(playerNum, computerNum);
        if (gameEnd) {
            return
        }
        const playerSelection = playerBtn.getAttribute("data-selection");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        updateScore(roundResult, playerNum, computerNum);
        updateRound();
    })
}

function capitalizeStr(string) {
    const firstCaps = string[0].toUpperCase();
    const restLower = string.slice(1).toLowerCase();
    return firstCaps + restLower;
}

function updateScore(roundResult, playerNum, computerNum) {
    if (roundResult === "tie") {
        return
    } else if (roundResult === "player") {
        playerNum++
        playerScore.textContent = playerNum;
    } else if (roundResult === "computer") {
        computerNum++
        computerScore.textContent = computerNum;
    }
}

function checkGame(playerNum, computerNum) {
    if (playerNum >= 5) {
        alert("You win");
        return true
    } else if (computerNum >= 5) {
        alert("You lose");
        return true
    }
    return false
}

function updateRound() {
    let roundNum = parseInt(roundTracker.textContent);
    roundTracker.textContent = ++roundNum;
}

function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerStr = capitalizeStr(playerSelection);

    const winResult = `+1 for Player, ${playerStr} beats ${computerSelection}`;
    const loseResult = `+1 for Challenger, ${computerSelection} beats ${playerStr}`;
    const tieResult = `You and Challenger both chose ${playerStr}`;

    if (playerStr === "Rock") {
        if (computerSelection === "Scissors") {
            resultPara.textContent = winResult;
            return "player"
        }
        else if (computerSelection === "Paper") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
            return "tie"
        }
    } else if (playerStr === "Paper") {
        if (computerSelection === "Rock") {
            resultPara.textContent = winResult;
            return "player"
        } else if (computerSelection === "Scissors") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
            return "tie"
        }
    } else if (playerStr === "Scissors") {
        if (computerSelection === "Paper") {
            resultPara.textContent = winResult;
            return "player"
        } else if (computerSelection === "Rock") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
            return "tie"
        }
    }
} 



