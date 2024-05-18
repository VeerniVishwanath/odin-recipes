document.addEventListener("DOMContentLoaded", () => {
  let score = [0, 0];

  // Starts the Game
  const startBtn = document.querySelector(".start");
  const resetBtn = document.querySelector(".reset");

  startBtn.addEventListener("click", () => {
    startBtn.classList.toggle("hidden");
    resetBtn.classList.toggle("hidden");

    const compScore = document.querySelector(".comp-score");
    const playerScore = document.querySelector(".player-score");

    compScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    score = [0, 0];
    startGame();
  });

  // Reset btn
  resetBtn.addEventListener("click", () => {
    location.reload();
  });

  // Gets Computer Choice
  function getComputerChoice() {
    const choice = parseInt(Math.random() * 3);
    return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
  }

  // Gets Player Choice
  function getPlayerChoice() {
    return new Promise(async (resolve) => {
      const handleClick = (e) => {
        resolve(e.target.dataset.value);

        btns.forEach((btn) => {
          removeEventListener("click", handleClick);
        });
      };

      const btns = document.querySelectorAll(
        ".btnRock,.btnPaper, .btnScissors"
      );

      await wait(3000).then(() => {
        animateHands();
      });

      btns.forEach((btn) => btn.addEventListener("click", handleClick));

      setTimeout(() => {
        btns.forEach((btn) => {
          btn.removeEventListener("click", handleClick);
        });
        resolve("rock");
      }, 5000);
    });
  }

  // Compared Results
  function getResult(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
      return "DRAW";
    }
    if (
      (computerChoice === "rock" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "rock")
    ) {
      return "You Win!!!";
    }

    return "You Loose!!!";
  }

  // Animates the Hands
  function animateHands() {
    const compHand = document.querySelector(".comp-hands");
    const playerHand = document.querySelector(".player-hands");

    compHand.classList.toggle("animate-up");
    playerHand.classList.toggle("animate-down");
  }

  // Plays one round
  async function playGame() {
    animateHands();
    const computerChoice = getComputerChoice();
    const playerChoice = await getPlayerChoice();
    const result = getResult(computerChoice, playerChoice);

    const annBox = document.querySelector(".announcement-container");
    const compScore = document.querySelector(".comp-score");
    const playerScore = document.querySelector(".player-score");

    if (result.includes("You Win")) {
      score[1]++;
      annBox.innerHTML = `${playerChoice} beats ${computerChoice}`;
      playerScore.innerHTML = `${score[1]}`;
    } else if (result.includes("You Loose")) {
      score[0]++;
      annBox.innerHTML = `${playerChoice} lost to ${computerChoice} `;
      compScore.innerHTML = `${score[0]}`;
    } else {
      annBox.innerHTML = `Draw`;
    }

    await wait(2000).then(() => {
      annBox.innerHTML = "";
    });
  }

  // Starts the Game
  async function startGame() {
    const infoBox = document.querySelector(".info-container");
    const annBox = document.querySelector(".announcement-container");
    let countDown = 3;

    // Starts CountDown
    const interval = setInterval(async () => {
      infoBox.innerHTML = countDown;
      console.log(countDown);

      if (countDown == 0) {
        clearInterval(interval);
        infoBox.innerHTML = "";
        for (let i = 0; i < 3; i++) {
          // Displays Round No.
          infoBox.innerHTML = `Round ${i + 1}`;
          setTimeout(() => {
            infoBox.innerHTML = "";
          }, 1000);
          await playGame();
        }

        // Displays End Results
        await wait(1500).then(() => {
          console.log(score);
          if (score[0] > score[1]) {
            annBox.innerHTML = "Computer Wins";
          } else if (score[1] > score[0]) {
            annBox.innerHTML = "Player Wins";
          } else {
            annBox.innerHTML = "DRAW";
          }
        });

        await wait(3000).then(() => {
          location.reload();
        });
      }
      countDown--;
    }, 1000);
  }

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
});
