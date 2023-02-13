// generate divs with id "cell"
let grid = document.querySelector(".grid");
let count = 0;
for (let i = 0; i < 240; i++) {
  let div = document.createElement("div");
  if (count == 0) {div.setAttribute("is_left", "true")}
  if (count == 19) {div.setAttribute("is_right", "true")}
  grid.appendChild(div);
  count++;
  console.log("count " + count);
  console.log("i " + i);
  if (count == 20) {count = 0}
}

// if we hover over a cell, change the color and console log the i value
let cells = document.querySelectorAll(".grid div");
let currentCell = 0;
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.background = "black";
        console.log(currentCell);
    });
    currentCell++;
});

// listen for keyboard input
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    move("left");
  } else if (event.key === "ArrowRight") {
    move("right");
  } else if (event.key === "ArrowUp") {
    move("up");
  } else if (event.key === "ArrowDown") {
    move("down");
  } else {
    console.log("not an arrow key!");
  }
});
