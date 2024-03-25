document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");

  const descript = document.querySelector(".des");

  console.log(descript);

  const CTB = document.getElementById("chagetext");
  CTB.addEventListener("click", () => {
    title.textContent = "abc";
    descript.textContent = "by bye";
  });

  const TCB = document.getElementById("togglecalss");
  TCB.addEventListener("click", () => {
    descript.classList.toggle("active");
    if (descript.classList.contains("active")) {
      descript.style.color = "green";
    } else {
      descript.style.color = "black";
    }
  });

  const link = document.getElementById("link");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("link clicked!!");
  });

  const gameArea = document.getElementById("gameArea");
  const scoreBoard = document.getElementById("score");
  const start = document.getElementById("startB");
  let score = 0;

  start.addEventListener("click", () => {
    score = 0;
    scoreBoard.textContent = score;
    startgame();
  });

  const startgame = () => {
    const coin = createCoin();
    gameArea.appendChild(coin);

    coin.addEventListener("click", () => {
      score++;
      scoreBoard.textContent = score;
      gameArea.removeChild(coin);
      startgame();
    });
  };

  const createCoin = () => {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.style.top = Math.random() * (gameArea.offsetHeight - 30) + "px";
    coin.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";
    return coin;
  };
});
  