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

// document.addEventListener("DOMContentLoaded", () => {
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const parent = document.getElementById("letters");
const word = document.getElementById("word");
const playAgain = document.getElementById("playAgain");
const message = document.getElementById("message");
let answer = "";
let guess = [];
let guessLeft = 0;
alphabets.map((id) => {
	let btn = document.createElement("button");
	btn.setAttribute("id", id);
	btn.innerHTML = `${id}`;
	parent.appendChild(btn);
	btn.onclick = (e) => {
		e.preventDefault();
		if (guess.includes("_") && guessLeft > 0) {
			checkAnswer(id);
		}
		if (guess.includes("_") == false || guessLeft == 0) {
			playAgain.setAttribute("style", "display:block");
			if (guess.includes("_") == false) {
				message.textContent = "Congratulations!You've won!";
			} else if (guessLeft == 0) {
				message.textContent = "Game over!The word was " + answer;
			}
		}
	};
});

const checkAnswer = (input) => {
	input = input.toLowerCase();
	if (answer.includes(input)) {
		replaceGuessWithAlphabet(input);
		setWord();
	} else {
		guessLeft = guessLeft - 1;
		console.log("GUESS LEFT = " + guessLeft);
	}
};

const setWord = () => {
	let tmpText = "";
	for (var i = 0; i < answer.length; i++) {
		tmpText = tmpText + guess[i] + " ";
	}
	word.textContent = tmpText;
};
const replaceGuessWithAlphabet = (input) => {
	input = input.toLowerCase();
	for (var i = 0; i < answer.length; i++) {
		if (input === answer[i]) {
			guess[i] = input;
		}
	}
};

const resetGame = () => {
	playAgain.setAttribute("style", "display:none");
	answer = words[Math.floor(Math.random() * words.length)];
	guessLeft = answer.length + 5;
	guess = [];
	for (var i = 0; i < answer.length; i++) {
		guess[i] = "_";
	}
	message.textContent = "";
	console.log(answer);
	console.log("GUESS LEFT = " + guessLeft);
	setWord();
};
resetGame();

// });
