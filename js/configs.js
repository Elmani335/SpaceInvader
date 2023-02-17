// Game's Config

var updateTick = 100;

// Store interval IDs in an array
var intervalIDs = [];

// Player's Configs

var playerBulletSpeed = 200;
var playerFireRate = 200;

// Invader's Configs

var invaderBulletSpeed = 300;
var invaderFireRate = 1000;
var invaderMoveSpeed = 500;
var invaderBulletCooldown = 2000;

isstarted = false

const startButton = document.getElementById('start-button');

// Start Game

// Click button "Start" to start the game
startButton.addEventListener('click', startGame);
const sound = new Audio('ressources/bg-sound.mp3');
// Press enter to start the game
window.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        sound.play();
        startGame();
    }
});

// function start the game

function startGame() {
    let countdownElement = document.getElementById('countdown');
    let grid = document.querySelector('.grid');
    let emptyGrid = document.querySelector('.empty-grid');
    let overlay = document.querySelector('.grid .overlay');
    if (grid) {
        grid.style.display = 'none';
    }
    if (emptyGrid) {
        emptyGrid.style.display = 'flex';
    }
    // if (textPressEnter) {
    //     const textPressEnter = document.getElementById("textPressEnter");
    //     setInterval(() => {
    //         textPressEnter.style.display = 'none';
    //     }, 20); // 500ms interval for blinking

    // }
    if (overlay) {
        overlay.style.display = 'flex';
    }
    if (startButton) {
        startButton.style.display = 'none';
    }
    if (countdownElement) {
        countdownElement.style.display = 'flex';
        countdownElement.innerHTML = '3';
    }
    let count = 3;
    let countdown = setInterval(function () {
        count--;
        if (countdownElement) {
            countdownElement.innerHTML = count;
        }
        if (count === 0) {
            countdownElement.innerHTML = 'Go!';
        }
        if (count < 0) {
            clearInterval(countdown);
            if (emptyGrid) {
                emptyGrid.style.display = 'none';
            }
            if (grid) {
                grid.style.display = 'flex';
            }
            if (overlay) {
                overlay.style.display = 'none';
            }
            isstarted = true;
        }
    }, 1000);
}