var score = 0;
var highScores = [];

var scoreElement = document.getElementById("score");

// add event listener to start button
startButton.addEventListener('click', startGame);
var isstart = false;
function startGame() {
    // remove start button
    isstarted = true;

}

function updateScore() {
    scoreElement.innerHTML = score;
    if (alienInvaders.length === 0 && isstarted) {
        clearInterval(intervalId);
        var name = prompt("Congratulations, you won! Enter your name:");
        if (name) {
            var scoreData = { name: name, score: score };
            highScores.push(scoreData);
            highScores = highScores.sort(function (a, b) {
                showGameOverPopup(score);
                clearAllIntervals();
                return b.score - a.score;
            });
            if (highScores.length > 10) {
                highScores = highScores.slice(0, 10);
            }
            localStorage.setItem("highScores", JSON.stringify(highScores));
            updateScoreTable();
        }
    }
}

// remove 50 score points every second if the player has more than 1000 points
function removeScore() {
    if (score > 1000) {
        score = score - 50;
    }
}
setInterval(removeScore, 1000);

function updateScoreTable() {
    var scoreListElement = document.getElementById("scoreList");
    scoreListElement.innerHTML = "";
    highScores.forEach(function (scoreData) {
        var name = scoreData.name;
        var score = scoreData.score;
        var li = document.createElement("li");
        var text = document.createTextNode(name + ": " + score);
        li.appendChild(text);
        scoreListElement.appendChild(li);
    });
}

// Load the high scores from local storage
var highScoresData = localStorage.getItem("highScores");
if (highScoresData) {
    highScores = JSON.parse(highScoresData);
    updateScoreTable();
}

var intervalId = setInterval(function () {
    updateScore();
}, 100);
