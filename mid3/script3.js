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

let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let live = 10;

function displayWord() {
  let display = "";
  for (let letter of selectedWord) {
    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }
  document.getElementById("word").textContent = display.trim();
}

function createLetterButtons() {
  let buttonContainer = document.getElementById("letters");
  for (let letter of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    let button = document.createElement("button");
    button.textContent = letter;
    button.className = "button";
    button.addEventListener("click", function () {
      guessLetter(letter.toLowerCase());
      button.disabled = true;
    });
    buttonContainer.appendChild(button);
  }
}

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) {
    document.getElementById("message").textContent =
      "You already guessed that letter. Try another one.";
    return;
  }

  guessedLetters.push(letter);
  displayWord();

  if (
    selectedWord.split("").every((letter) => guessedLetters.includes(letter))
  ) {
    document.getElementById("message").textContent =
      "Congratulations! You guessed the word!";
  }
  document.getElementById("message").textContent = "";
}

function resetGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
//   document.getElementById("playAgain").style.display = "none";
  document.getElementById("message").textContent = "";
  document.getElementById("letters").innerHTML = "";
  createLetterButtons();
  displayWord();
}
console.log(selectedWord);
displayWord();
createLetterButtons();
