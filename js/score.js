var score = 0;
// get the element score from the html
var scoreElement = document.getElementById("score");
// update the score in a loop every 100ms
setInterval(function () {
    scoreElement.innerHTML = score;
    if (alienInvaders.length === 0) {
        console.log("You win!");
        // stop the game

    }
}, 100);
// console log if the alienInvaders array is empty
