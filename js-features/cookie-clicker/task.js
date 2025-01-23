const cookie = document.getElementById('cookie');
const counter = document.getElementById('counter');

let clickCount = 0;
let isBig = false;

cookie.addEventListener('click', () => {
  clickCount++;
  counter.textContent = clickCount;

  if (isBig) {
    cookie.style.transform = 'scale(1)';
  } else {
    cookie.style.transform = 'scale(1.2)';
  }
  isBig = !isBig;
});