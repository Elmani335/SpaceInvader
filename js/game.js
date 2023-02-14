// create a player div
let player = document.createElement("div");
player.classList.add("object");
grid.appendChild(player);

// set the initial position of the player
let playerPos = 229;
player.style.left = cells[playerPos].offsetLeft + "px";
player.style.top = cells[playerPos].offsetTop + "px";

// handle the key events
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // left arrow
            if (playerPos % 20 !== 0) {
                playerPos--;
                player.style.left = cells[playerPos].offsetLeft + "px";
            }
            break;
        case 38: // up arrow
            if (playerPos >= 20) {
                playerPos -= 20;
                player.style.top = cells[playerPos].offsetTop + "px";
            }
            break;
        case 39: // right arrow
            if (playerPos % 20 !== 19) {
                playerPos++;
                player.style.left = cells[playerPos].offsetLeft + "px";
            }
            break;
        case 40: // down arrow
            if (playerPos <= 219) {
                playerPos += 20;
                player.style.top = cells[playerPos].offsetTop + "px";
            }
            break;
    }

    // add attribute "player" to the current cell
    cells[playerPos].setAttribute("player", "true");

    // remove the attribute from all other cells
    for (let i = 0; i < cells.length; i++) {
        if (i !== playerPos) {
            cells[i].removeAttribute("player");
        }
    }
};