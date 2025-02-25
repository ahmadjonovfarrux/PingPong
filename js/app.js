const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Btn = document.querySelector("#player1Btn");
const player2Btn = document.querySelector("#player2Btn");
const winnerScore = document.querySelector("#winnerScore");
const reset = document.querySelector("#reset");

let player1Counter = 0;
let player2Counter = 0;
let scoreLimit = +winnerScore.value;
let game = true;

player1Btn.addEventListener("click", () => {
  if (game) {
    player1Counter++;
    player1.textContent = player1Counter;
    if (scoreLimit == player1Counter) {
      game = false;
      player1.style.color = "green";
      player2.style.color = "red";
    }
  }
});

player2Btn.addEventListener("click", () => {
  if (game) {
    player2Counter++;
    player2.textContent = player2Counter;
    if (scoreLimit == player2Counter) {
      game = false;
      player2.style.color = "green";
      player1.style.color = "red";
    }
  }
});
function resetFunction() {
  player1.textContent = 0;
  player1Counter = 0;
  player2.textContent = 0;
  player2Counter = 0;
  game = true;
  player2.style.color = "white";
  player1.style.color = "white";
}

winnerScore.addEventListener("change", () => {
  scoreLimit = +winnerScore.value;
  resetFunction();
});

reset.addEventListener("click", () => {
  resetFunction();
});

// Event loop
// callback queue
// webapis

// call stack
// sinhron
// console.log("hi");
// setTimeout(() => {
//   console.log("there");
// }, 5000);

// console.log("Farrux");
