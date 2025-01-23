const timerElement = document.getElementById("timer");

let timerValue = parseInt(timerElement.textContent, 10);

const countdown = setInterval(() => {
  timerValue--;
  timerElement.textContent = timerValue;

  if (timerValue <= 0) {
    clearInterval(countdown);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
