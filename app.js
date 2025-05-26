let min = 0, sec = 0, msec = 0;
let interval = null;
let running = false;

function updateDisplay() {
  let txt = 
    (min < 10 ? "0" + min : min) + ":" +
    (sec < 10 ? "0" + sec : sec) + ":" +
    (msec < 10 ? "0" + msec : msec);
  document.querySelector(".display").textContent = txt;
}

function startTimer() {
  if (!running) {
    running = true;
    interval = setInterval(function() {
      msec++;
      if (msec == 100) {
        sec++;
        msec = 0;
      }
      if (sec == 60) {
        min++;
        sec = 0;
      }
      updateDisplay();
    }, 10);
  }
}

function stopTimer() {
  clearInterval(interval);
  running = false;
}

function resetTimer() {
  clearInterval(interval);
  min = 0; sec = 0; msec = 0;
  running = false;
  updateDisplay();
}

document.getElementById("start").onclick = startTimer;
document.getElementById("stop").onclick = stopTimer;
document.getElementById("reset").onclick = resetTimer;

updateDisplay(); 