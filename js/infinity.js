// 


// when there is only 1 invader left, regenerate the invaders
let ft_invaderRegen = setInterval(function () {
    if (isinf === true) {
        if (isstarted === true) {
            if (alienInvaders.length === 1) {
                alienInvaders = [];
                for (let i = 0; i < 240; i++) {
                    cells[i].classList.remove("invader");
                }
                generateInvaders();
            }
        }
    }
}, 1000);
intervalIDs.push(ft_invaderRegen);
