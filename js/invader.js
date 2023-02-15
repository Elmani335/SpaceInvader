// Create 36 invaders in a 12x3 in middle of grid
let i = 4;

while (i < 16) {
    cells[i].classList.add("invader");
    i++;
}
i += 8;
while (i < 16 + 20) {
    cells[i].classList.add("invader");
    i++;
}
i += 8;
while (i < 26 + 20) {
    cells[i].classList.add("invader");
    i++;
}