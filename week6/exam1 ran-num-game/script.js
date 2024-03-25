let rannum = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;

const btn_check = document.querySelector(".btn_check");
const re = document.querySelector(".re");
console.log(rannum);

btn_check.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(rannum);
  let sercet = document.querySelector(".secret");
  let scorer = document.querySelector(".score");
  let message = document.querySelector(".message");
  let highscorer = document.querySelector(".highscore");
  const guess = Number(document.querySelector(".guess").value);
  console.log(document.querySelector(".guess").value);

  if (score >= 1) {
    if (document.querySelector(".guess").value != "") {
      if (guess === rannum) {
        message.textContent = "smooth criminal";
        sercet.textContent = rannum;
        if (highscore < score) highscore = score;
        highscorer.textContent = highscore;
      } else if (guess < rannum) {
        message.textContent = "your number are less than answer";
        score--;
        scorer.textContent = score;
      } else if (guess > rannum) {
        message.textContent = "your number are more than answer";
        score--;
        scorer.textContent = score;
      }
    } else {
      message.textContent = "please input!!!";
    }
  } else {
    document.getElementsByClassName("btn_check").disabled = true;
    message.textContent = "you lose";
  }
  re.addEventListener("click", (e) => {
    e.preventDefault();
    score = 10;
    scorer.textContent = score;
    rannum = Math.ceil(Math.random() * 21);
    sercet.textContent = "?";
    message.textContent = "let's guess it";
    document.querySelector(".guess").defaultValue;
    document.querySelector(".guess").value = "";
  });
});
