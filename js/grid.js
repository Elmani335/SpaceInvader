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

// if we hover over a cell and click, it will tell us its position in the grid from 1-240
let cells = document.querySelectorAll(".grid div");
let currentCell = 0;
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function () {
        currentCell = i;
    });
    cells[i].addEventListener("click", function () {
        console.log("Cell number : " + currentCell);

    });
}


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
