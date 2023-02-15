// Create 36 invaders in a 12x3 in middle of grid
for (let i = 0; i < 36; i++) {
    let invader = document.createElement("div");
    invader.classList.add("invader");
    allGrid.appendChild(invader);
    // Set invader's position without style.left and style.top
    invader.setAttribute("row", Math.floor(i / 12));
    invader.setAttribute("col", i % 12);
}