// console.log(cells.length);
let playerPos = 230;
var score = 0;

// Create player's ship
cells[playerPos].classList.add("player");

// move player's ship
document.addEventListener("keydown", function (event) {
    cells[playerPos].classList.add("player");
    if (event.key === "ArrowLeft") {
        if (playerPos % 20 !== 0) {
            cells[playerPos].classList.remove("player");
            playerPos -= 1;
            cells[playerPos].classList.add("player");
        }
    } else if (event.key === "ArrowRight") {
        if (playerPos % 20 !== 19) {
            cells[playerPos].classList.remove("player");
            playerPos += 1;
            cells[playerPos].classList.add("player");
        }
    } else if (event.key == "ArrowUp") {
        if (playerPos - 20 >= 0) {
            cells[playerPos].classList.remove("player");
            playerPos -= 20;
            cells[playerPos].classList.add("player");
        }
    } else if (event.key == "ArrowDown") {
        if (playerPos + 20 < 240) {
            cells[playerPos].classList.remove("player");
            playerPos += 20;
            cells[playerPos].classList.add("player");
        }
    }
});

// Press space to fire bullet
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        var bulletPos = playerPos - 20;
        cells[bulletPos].classList.add("bullet");
    }
});

// Move bullet
setInterval(function () {
    for (let i = 0; i < 240; i++) {
        if (cells[i].classList.contains("bullet")) {
            cells[i].classList.remove("bullet");
            if (i - 20 >= 0)
                cells[i - 20].classList.add("bullet");
        }
    }
}, 100);

// collision detection
setInterval(function () {
    for (let i = 0; i < 240; i++) {
        if (cells[i].classList.contains("bullet") && cells[i].classList.contains("invader")) {
            cells[i].classList.remove("bullet");
            cells[i].classList.remove("invader");
            score++;
        }
    }
} , 100);