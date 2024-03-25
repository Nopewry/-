const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const parent = document.querySelector("#letters");
const word = document.querySelector("#word");
const playAgain = document.querySelector("#playAgain");
const message = document.querySelector("#message");
let answer = "";
let guess = [];
let lifepoint = 0;

alphabets.map((id) => {
  let btn = document.createElement("button");
  btn.innerHTML = `${id}`;
  parent.appendChild(btn);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    check(id);
  });
});


const check = (inp) => {
  inp = inp.toLowerCase();
  if(lifepoint > 1){
    if(guess.includes(`_`)){
      if (answer.includes(inp)) {
        console.log(inp);
        show(inp);
      }
      else{
        lifepoint--
        console.log(lifepoint);
      }
    }
    else{
      message.textContent = "You win!!!"
      playAgain.style.display = "block"
    }
  }
  else{
    message.textContent = "Lose!!!"
    playAgain.style.display = "block"
    showall();
  }
};

//show answer
const showall = () => {
  for(let i = 0 ; i < answer.length ; i++){
    guess[i] = answer[i]
  }
  set();
}

const show = (inp) => {
  inp = inp.toLowerCase();
  for (let i = 0; i < answer.length; i++) {
    if (inp === answer[i]) {
      guess[i] = inp;
    }
  }
  set()
};

const set = () => {
  let tmp = "";
	for (let i = 0; i < answer.length; i++) {
		tmp = tmp + guess[i] + " ";
	}
	word.textContent = tmp;
}

const resetGame = () => {
  let tmp = "";
  playAgain.style.display = "none"
  message.textContent = ""
  answer = words[Math.floor(Math.random() * words.length)];
  guessLeft = Math.ceil(answer.length * 1.5);
  for (let i = 0; i < answer.length; i++) {
    guess[i] = `_`;
    tmp += guess[i];
  }

  word.textContent = tmp;
  console.log(answer);
  console.log(answer.length);
  console.log(guessLeft);
};

resetGame();
