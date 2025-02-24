const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Btn = document.querySelector("#player1Btn");
const player2Btn = document.querySelector("#player2Btn");
const winnerScore = document.querySelector("#winnerScore");
// const resetKey = prompt("Enter the limit of the time");

let player1Counter = 0;
let player2Counter = 0;
let game = true;

player1Btn.addEventListener("click", () => {
  if (game) {
    if (winnerScore.textContent > player1Counter) {
      player1Counter++;
      player1.textContent = player1Counter;
    } else {
      game = false;
      player1.style.color = "green";
      player2.style.color = "red";
    }
  }
});

player2Btn.addEventListener("click", () => {
  if (game) {
    if (winnerScore.textContent > player2Counter) {
      player2Counter++;
      player2.textContent = player2Counter;
    } else {
      game = false;
      player2.style.color = "green";
      player1.style.color = "red";
    }
  }
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
