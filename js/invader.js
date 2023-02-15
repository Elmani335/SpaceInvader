// Create 36 invaders in a 12x3 in middle of grid
let i = 4;
for (let j = 0; j < 3; j++) {
    while (i < (j + 1) * 20 - 4) {
        cells[i].classList.add("invader");
        i++;
    }
    i += 8;
}
