let rannum = Math.ceil(Math.random() * 21);
let score = 10;
let high_score = 0;

const bt = document.querySelector(".btn_check");
const re = document.querySelector(".re");
const message = document.querySelector(".message");
const correct_number = document.querySelector(".secret");

let scores = document.querySelector(".score");
let highscores = document.querySelector(".highscore");
console.log(rannum);

bt.addEventListener("click", (e) => {
  e.preventDefault();
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (score > 0) {
    if (guess != "") {
      if (guess === rannum) {
        message.textContent = `${guess} are correct number`;
        correct_number.textContent = `correct number is ${rannum}`;
        if (score > high_score) {
          high_score = score;
          highscores.textContent = high_score;
        }
      } else if (guess > rannum) {
        message.textContent = `${guess} are more than answer`;
        score--;
        scores.textContent = score;
      } else if (guess < rannum) {
        message.textContent = `${guess} are less than answer`;
        score--;
        scores.textContent = score;
      } else {
        message.textContent = `YOU'RE LOSE!!!`;
      }
    }
  }
});

re.addEventListener("click", (e) => {
  e.preventDefault();
  score = 10;
  rannum = Math.ceil(Math.random() * 21);
  correct_number.textContent = `?`;
  scores.textContent = score;
  message.textContent = `let's guess it`;
  document.querySelector(".guess").value = "";
});
