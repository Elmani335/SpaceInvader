
let isinf = false;   // is infinity mode on?
let infmode = document.getElementById("inf");
// check if the chekbox is checked or not
if (infmode.checked) {
    isinf = true;
    console.log("Infinity mode is on");
} else {
    isinf = false;
    console.log("Infinity mode is off");
}
infmode.addEventListener("change", function () {
    if (infmode.checked) {
        isinf = true;
        console.log("Infinity mode is on");
    } else {
        isinf = false;
        console.log("Infinity mode is off");
    }
} );

// when there is only 1 invader left, regenerate the invaders
let ft_invaderRegen = setInterval(function () {
    if (isinf === true) {
        if (alienInvaders.length === 1) {
            let i = 0;
            for (let j = 0; j < 3; j++) {
                while (i < (j + 1) * 20 - 4) {
                    cells[i].classList.add("invader");
                    alienInvaders.push(i);
                    i++;
                }
                i += 8;
            }
            i += 8;
        }
    }
} , 1000);

intervalIDs.push(ft_invaderRegen);
