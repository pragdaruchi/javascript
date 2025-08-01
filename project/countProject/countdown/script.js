let totalTime = 5 * 60; // 5 minutes = 300 seconds
let show = document.getElementById("time");

setInterval(function () {
  let sec = totalTime % 60;
  let min = (totalTime - sec) / 60;

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  show.textContent = min + ":" + sec;
  totalTime--;

  if (totalTime < 0) {
    show.textContent = "Time Up!";
  }
}, 1000);
