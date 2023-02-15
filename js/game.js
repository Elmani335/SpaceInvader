let allGrid = document.querySelectorAll(".grid div");

// console.log(allGrid.length);
let playerPos = 230;

// create/display player's ship at playerPos
allGrid[playerPos].classList.add("object");

// move player's ship
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        if (playerPos % 20 !== 0) {
            allGrid[playerPos].classList.remove("object");
            playerPos -= 1;
            allGrid[playerPos].classList.add("object");
        }
    } else if (event.key === "ArrowRight") {
        if (playerPos % 20 !== 19) {
            allGrid[playerPos].classList.remove("object");
            playerPos += 1;
            allGrid[playerPos].classList.add("object");
        }
    } else if (event.key == "ArrowUp") {
        if (playerPos - 20 >= 0) {
            allGrid[playerPos].classList.remove("object");
            playerPos -= 20;
            allGrid[playerPos].classList.add("object");
        }
    } else if (event.key == "ArrowDown") {
        if (playerPos + 20 < 240) {
            allGrid[playerPos].classList.remove("object");
            playerPos += 20;
            allGrid[playerPos].classList.add("object");
        }
    }
});

// Press space to fire bullet
document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        var bulletPos = playerPos - 20;
        allGrid[bulletPos].classList.add("bullet");
    }
});

// Move bullet
setInterval(function () {
    for (let i = 0; i < 240; i++) {
        if (allGrid[i].classList.contains("bullet")) {
            allGrid[i].classList.remove("bullet");
            if (i - 20 >= 0)
                allGrid[i - 20].classList.add("bullet");
        }
    }
}, 300);

// Colision detection

