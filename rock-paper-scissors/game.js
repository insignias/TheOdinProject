let playerScore = 0;
let computerScore = 0;
let lastStatus = 'Start the Game';

const content = document.querySelector(".content");
const buttons = document.querySelectorAll("button");
const h3 = document.querySelector("h3#result");
h3.textContent = lastStatus;
let gameCount = 5;
let count = 0

const countElement = document.createElement('div');
countElement.className = "score";
const playerDiv = document.createElement('div');
const playerH4 = document.createElement('h4');
const playerUl = document.createElement('ul');
playerDiv.appendChild(playerH4);
playerDiv.appendChild(playerUl);

const computerDiv = document.createElement('div');
const computerH4 = document.createElement('h4');
const computerUl = document.createElement('ul');
computerDiv.appendChild(computerH4);
computerDiv.appendChild(computerUl);

countElement.appendChild(playerDiv);
countElement.appendChild(computerDiv);
content.appendChild(countElement);

/**
 * Random computer choice generator
 * @returns string
 */
function getComputerChoice() {
    const items = ['Rock', 'Paper', 'Scissors'];
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

/**
 * Get result for a game round
 * @param {string} playerChoice 
 * @param {string} computerChoice 
 * @returns 
 */
function playRound(playerChoice, computerChoice) {
    const playerLi = document.createElement('li');
    playerLi.textContent = playerChoice
    playerUl.appendChild(playerLi)
    const computerLi = document.createElement('li');
    computerLi.textContent = computerChoice
    computerUl.appendChild(computerLi)

    // Rock beats scissors, scissors beat paper, and paper beats rock
    if (playerChoice === computerChoice) return `It's a tie, ${playerChoice} === ${computerChoice}`;

    if (
        playerChoice === 'Rock' && computerChoice === 'Scissors' ||
        playerChoice === 'Scissors' && computerChoice === 'Paper' ||
        playerChoice === 'Paper' && computerChoice === 'Rock'
    ) {
        return `You win ! (Player: ${playerChoice.toLowerCase()}) beats (Computer: ${computerChoice})`;
    }
    return `You lose, (Computer: ${computerChoice}) beats (Player: ${playerChoice.toLowerCase()})`;
}

/**
 * Helper function to update the dom
 * @param {string} result 
 */
function domUpdate(result) {
    let color = '#008000';
    if (result.includes('Losing') || result.includes('lost')) color = '#ff0000';
    if (result.includes('tie')) color = '#0000FF';
    document.getElementById("result").style.color = color;
    document.getElementById("result").textContent = result;
}

/**
 * Play Game First to score 5 wins
 * @param {*} playerChoice 
 * @returns 
 */
function playGame(playerChoice) {
    // Reset when game over
    if (lastStatus.includes('Startover')) {
        console.log(lastStatus)
        playerScore = 0;
        computerScore = 0;
        playerUl.textContent = ""
        computerUl.textContent = ""
        lastStatus = 'Start the Game'
    }

    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    // domUpdate(result);
    if (result.includes('You win')) {
        ++playerScore;
        lastStatus = "Winner winner chicken dinner!";
    } else if (result.includes('You lose')) {
        ++computerScore;
        lastStatus = "Losing sucks";
    } else {
        lastStatus = "It's a tie"
    }
    return domUpdate(lastStatus);
}

/**
 * Button eventListener
 */
buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        h3.textContent = 'Play'
    })
        
    btn.addEventListener("mouseout", () => {
        h3.textContent = lastStatus;
    })

    btn.addEventListener("click", () => {
        if (playerScore === gameCount || computerScore === gameCount) {
            
            if (playerScore === gameCount) {
                lastStatus = 'Game over, You Won! Startover';
            } else if (computerScore === gameCount) {
                lastStatus = 'Game over, You lost. Startover';
            }
            console.log(lastStatus)
            domUpdate(lastStatus);
        }
        computerH4.textContent = `Computer Score: ${computerScore}/${gameCount}`;
        playerH4.textContent = `Player Score: ${playerScore}/${gameCount}`;
    })
})
