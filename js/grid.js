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

// move the object in response to arrow key events
function move(direction) {
  let cells = document.querySelectorAll("#cell");

  if (direction === "left") {
    objectPos.x -= 25;
    if (objectPos.x < 0) {
      objectPos.x = 0;
    }
  } else if (direction === "right") {
    objectPos.x += 25;
    if (objectPos.x > 800 - 25) {
      objectPos.x = 800 - 25;
    }
  } else if (direction === "up") {
    objectPos.y -= 25;
    if (objectPos.y < 0) {
      objectPos.y = 0;
    }
  } else if (direction === "down") {
    objectPos.y += 25;
    if (objectPos.y > 600 - 25) {
      objectPos.y = 600 - 25;
    }
  }

  object.style.left = objectPos.x + "px";
  object.style.top = objectPos.y + "px";

// check for collisions with cells
  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    let cellRect = cell.getBoundingClientRect();
    let objectRect = object.getBoundingClientRect();
    if (
        objectRect.left >= cellRect.left &&
        objectRect.left <= cellRect.right &&
        objectRect.top >= cellRect.top &&
        objectRect.top <= cellRect.bottom
    ) {
      console.log("collision detected");
    }
  }
}