const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;
const totalHoles = 9;
const maxDead = 10;
const maxLost = 5;

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
    alert('Статистика обнулена. Начинаем заново!');
}

function checkGameStatus() {
    if (dead === maxDead) {
        alert('Поздравляем! Вы победили!');
        resetGame();
    } else if (lost === maxLost) {
        alert('Игра окончена. Вы проиграли.');
        resetGame();
    }
}

function handleHoleClick(event) {
    const hole = event.target;

    if (hole.classList.contains('hole_has-mole')) {
        dead++;
        deadCounter.textContent = dead;
    } else {
        lost++;
        lostCounter.textContent = lost;
    }

    checkGameStatus();
}

for (let i = 1; i <= totalHoles; i++) {
    const hole = getHole(i);
    hole.onclick = handleHoleClick;
}

function showRandomMole() {
    for (let i = 1; i <= totalHoles; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }

    const randomHoleIndex = Math.floor(Math.random() * totalHoles) + 1;
    getHole(randomHoleIndex).classList.add('hole_has-mole');
}

setInterval(showRandomMole, 1000);
