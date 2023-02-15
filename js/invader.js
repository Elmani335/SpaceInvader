// Create 36 invaders in a 12x3 in middle of cells
let i = 4;
var alienInvaders = [];
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
let descendreRight = true;
let descendreLeft = true;

setInterval(function () {
    
    for (let i = 0; i < alienInvaders.length; i++) {

        if (cells[alienInvaders[i]].getAttribute('is_right') === 'true') {
            if (descendreRight) {
                direction = 20;
                descendreRight = false;
                break;
            }
            else if (descendreRight === false) {
                direction = -1;
                descendreRight = true;
                break;
            }
        } 
        if (cells[alienInvaders[i]].getAttribute('is_left') === 'true') {
            if (descendreLeft) {
                direction = 20;
                descendreLeft = false;
                break;
            }
            else if (descendreLeft === false) {
                direction = 1;
                descendreLeft = true;
                break;
            }
        }
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
}, 200);