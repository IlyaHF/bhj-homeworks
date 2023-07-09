const countdown = function() {
  const score = document.getElementById(`timer`);
  score.textContent -= 1;
  if (score.textContent <= 0) {
    clearInterval(intervalId);
    alert(`Вы победили в конкурсе!`);
  }
};
const intervalId = setInterval(countdown, 1000);