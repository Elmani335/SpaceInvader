// console.log(cells.length);
let playerPos = 230;
var score = 0;
let cooldown = false;

// Create player's ship
cells[playerPos].classList.add("player");


// add event listener to start button
startButton.addEventListener('click', startGame);
var isstart = false;
function startGame() {
    // remove start button
    isstarted = true;

}

// move player's ship
document.addEventListener("keydown", function (event) {
    if (isstarted) {
        cells[playerPos].classList.add("player");
        if (event.key === "ArrowLeft" && isstarted) {
            if (playerPos % 20 !== 0) {
                cells[playerPos].classList.remove("player");
                playerPos -= 1;
                cells[playerPos].classList.add("player");
            }
        } else if (event.key === "ArrowRight" && isstarted) {
            if (playerPos % 20 !== 19) {
                cells[playerPos].classList.remove("player");
                playerPos += 1;
                cells[playerPos].classList.add("player");
            }
        } else if (event.key == "ArrowUp") {
            if (playerPos >= 200 && playerPos < 240) {
                if (playerPos - 20 >= 0) {
                    cells[playerPos].classList.remove("player");
                    playerPos -= 20;
                    cells[playerPos].classList.add("player");
                }
            }
        } else if (event.key == "ArrowDown") {
            if (playerPos + 20 < 240) {
                cells[playerPos].classList.remove("player");
                playerPos += 20;
                cells[playerPos].classList.add("player");
            }
        }
    }
});

// Press space to fire bullet
document.addEventListener("keydown", function (event) {
    if (isstarted) {
        if (event.key === " ") {
            if (!cooldown) {
                var bulletPos = playerPos - 20;
                cells[bulletPos].classList.add("bullet");
                cooldown = true;
                setTimeout(function () {
                    cooldown = false;
                }, playerFireRate);
            }
            else
                return;
        }
    }
});


// Move bullet
let ft_playerBulletSpeed = setInterval(function () {
    for (let i = 0; i < 240; i++) {
        if (cells[i].classList.contains("bullet")) {
            cells[i].classList.remove("bullet");
            if (i - 20 >= 0)
                cells[i - 20].classList.add("bullet");
        }
    }
}, playerBulletSpeed);
intervalIDs.push(ft_playerBulletSpeed);

// collision detection
let ft_updateTick = setInterval(function () {
    for (let i = 0; i < 240; i++) {
        if (cells[i].classList.contains("bullet") && cells[i].classList.contains("invader")) {
            cells[i].classList.remove("bullet");
            cells[i].classList.remove("invader");
            alienInvaders.splice(alienInvaders.indexOf(i), 1);
            score = score + 100;
            cells[i].classList.add("boom");
            setTimeout(function () {
                cells[i].classList.remove("boom");
            }, 500);
        }
        //Game over if invader reaches the bottom
        if (cells[i].classList.contains("invader") && i >= 220) {
            showGameOverPopup(score);
            clearAllIntervals();
        }
        //Game over if player is hit by invader
        if (cells[i].classList.contains("player") && cells[i].classList.contains("invader")) {
            cells[i].classList.remove("player");
            cells[i].classList.remove("invader");
            cells[i].classList.add("boom");
            showGameOverPopup(score);
            clearAllIntervals();
        }
        //Game over if player is hit by invader bullet
        if (cells[i].classList.contains("invader_bullet") && cells[i].classList.contains("player")) {
            cells[i].classList.remove("invader_bullet");
            cells[i].classList.remove("player");
            cells[i].classList.add("boom");
            console.log("Hit");
            showGameOverPopup(score);
            clearAllIntervals();
        }
    }
}, updateTick);
intervalIDs.push(ft_updateTick);

// Clear all intervals function
function clearAllIntervals() {
    for (let i = 0; i < intervalIDs.length; i++) {
        clearInterval(intervalIDs[i]);
    }
}

//Popup when game is over
const gameOverPopup = document.getElementById("gameOverPopup");
const finalScoreElement = document.getElementById("finalScore");
const playAgainButton = document.getElementById("playAgainButton");
const stopButton = document.getElementById("stop-button");

function showGameOverPopup(score) {
    finalScoreElement.innerText = score;
    gameOverPopup.style.display = "flex";
}

playAgainButton.addEventListener("click", () => {
    // Restart the game here
    gameOverPopup.style.display = "none";
    location.reload();
});

stopButton.addEventListener("click", () => {
    showGameOverPopup(score);
    clearAllIntervals();
});
