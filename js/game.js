// console.log(cells.length);
let playerPos = 230;
var score = 0;
let cooldown = false;

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
});

// Press space to fire bullet
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        if (!cooldown) {
            var bulletPos = playerPos - 20;
            cells[bulletPos].classList.add("bullet");
            cooldown = true;
            setTimeout(function () {
                cooldown = false;
            }, 100);
        }
        else
            return;
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
            alienInvaders.splice(alienInvaders.indexOf(i), 1);
            score = score + 100;
            cells[i].classList.add("boom");
            setTimeout(function () {
                cells[i].classList.remove("boom");
            }, 500);
        }
        if (cells[i].classList.contains("player") && cells[i].classList.contains("invader")) {
            cells[i].classList.remove("player");
            cells[i].classList.remove("invader");
            cells[i].classList.add("boom");
            alert("Game Over");
            location.reload();
        }
    }
}, 100);