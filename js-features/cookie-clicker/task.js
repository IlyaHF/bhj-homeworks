const scoreClicks = document.getElementById(`clicker__counter`);
const cookie = document.getElementById(`cookie`);
let score = 0;

function clickCookie() {
  score += 1;
  scoreClicks.textContent = score;
  if (score % 2 === 0){
    cookie.width = 180;
  } else {
    setTimeout(() => {cookie.width = 220;}, 50);
  }
}

cookie.onclick = clickCookie;