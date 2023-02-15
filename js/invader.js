// Create 36 invaders in a 12x3 in middle of cells
let i = 4;
let alienInvaders = [];
let j = 0;

for (let j = 0; j < 3; j++) {
    while (i < (j + 1) * 20 - 4) {
        cells[i].classList.add("invader");
        alienInvaders.push(i);
        i++;
    }
    i += 8;
}

// move block invaders
let direction = 1;

setInterval(function () {
    // Dectect direction move right left : div attribute is_right is_left
    if (cells[alienInvaders[alienInvaders.length - 1]].getAttribute("is_right") == "true") {
        direction = 20;
        cells[alienInvaders[alienInvaders.length - 1]].setAttribute("is_right", "false");
    } else if (cells[alienInvaders[0]].getAttribute("is_left") == "true") {
        direction = -20;
        cells[alienInvaders[0]].setAttribute("is_left", "false");
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        cells[alienInvaders[i]].classList.remove('invader');
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        cells[alienInvaders[i]].classList.add('invader');
    }
}, 100);