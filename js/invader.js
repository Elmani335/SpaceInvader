// create 36 invader divs
for (let i = 0; i < 36; i++) {
    let invader = document.createElement("div");
    invader.classList.add("object", "invader");
    grid.appendChild(invader);
    invader.style.left = cells[i + 20 + Math.floor(i / 12) * 19].offsetLeft + "px";
    invader.style.top = cells[i + 20 + Math.floor(i / 12) * 19].offsetTop + "px";
}

// set the initial direction of the invaders
let direction = 1;

// set the initial row and column of the invaders
let row = 0;
let col = 0;

// move the invaders every 500 milliseconds
setInterval(function() {
    // loop through each invader
    for (let i = 0; i < 36; i++) {
        // remove the invader from its current cell if the cell exists
        let cell = cells[row * 20 + col + i + 20 + Math.floor(i / 12) * 19];
        if (cell) {
            cell.removeAttribute("invader");
        }
    }

    // calculate the new position of the invaders
    if ((col === 8 && direction === 1) || (col === 0 && direction === -1)) {
        direction *= -1;
        row++;
    } else {
        col += direction;
    }

    // loop through each invader
    for (let i = 0; i < 36; i++) {
        // set the new position of the invader
        let invaderPos = row * 20 + col + i + 20 + Math.floor(i / 12) * 8;
        let invader = document.querySelectorAll(".invader")[i];
        invader.style.left = cells[invaderPos].offsetLeft + "px";
        invader.style.top = cells[invaderPos].offsetTop + "px";
        // add the invader to its new cell
        let cell = cells[invaderPos];
        if (cell) {
            cell.setAttribute("invader", "true");
        }
    }
    // check if the invader has reached the bottom row
    if (row === 8) {
        //alert("Game Over");
        // reload the page to restart the game
        location.reload();
    }
}, 100);