const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

const originalSize = 200;
const reducedSize = 150;

let isCookieReduced = false;

cookie.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;

    if (isCookieReduced) {
        cookie.width = originalSize;
    } else {
        cookie.width = reducedSize;
    }

    isCookieReduced = !isCookieReduced;
});
