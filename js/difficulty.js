// Set difficulty level

// Invader's Configs

function setDifficulty() {
    if (difficulty === "easy") {
        invaderBulletSpeed = 500;
        invaderFireRate = 1200;
        invaderMoveSpeed = 500;
        invaderBulletCooldown = 2000;
    } else if (difficulty === "medium") {
        invaderBulletSpeed = 300;
        invaderFireRate = 1000;
        invaderMoveSpeed = 400;
        invaderBulletCooldown = 1500;
    } else if (difficulty === "hard") {
        invaderBulletSpeed = 250;
        invaderFireRate = 800;
        invaderMoveSpeed = 300;
        invaderBulletCooldown = 1000;
    }
}