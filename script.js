let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

function updateDisplay() {
  const format = num => num < 10 ? "0" + num : num;
  document.getElementById('display').innerText =
    `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  isRunning = false;
  clearInterval(timer);
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  seconds = minutes = hours = 0;
  updateDisplay();
}
