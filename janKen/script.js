//Alert to open console
let alertShown = sessionStorage.getItem("alertShown");

if (!alertShown) {
  alert("Open the Console to start the game");

  sessionStorage.setItem("alertShown", true);
}

//Intro
console.log(
  "Konichiwa \n\nLet's play JanKen -The Japanese version of Rock Paper Scissors \n\n"
);

//Rules
console.groupCollapsed("Rules");
console.log(`1. Rules are same as the English version.
2. Here,  Guu = Rock 
          Paa = Paper
          Choki = Scissors
3. You'll play a five round game against the computer. 
4. Refresh the page to reset the game.`);
console.groupEnd();

//Game
let scores = [0, 0];

function getComputerChoice() {
  let value = parseInt(Math.random() * 3);

  if (value == 0) {
    return "guu";
  } else if (value == 1) {
    return "paa";
  } else {
    return "choki";
  }
}

function getPlayerSelection() {
  return prompt(`Saisho wa guu (Starting with stone) \n Janken pon! `);
}

function compareSelections(computerSelection, playerSelection) {
  if (
    !(
      playerSelection == "guu" ||
      playerSelection == "paa" ||
      playerSelection == "choki"
    )
  ) {
    return "wrong move";
  }

  if (playerSelection == computerSelection) {
    return "draw";
  }

  if (
    (computerSelection == "guu" && playerSelection == "paa") ||
    (computerSelection == "paa" && playerSelection == "choki") ||
    (computerSelection == "choki" && playerSelection == "guu")
  ) {
    return "You Win !!!!";
  }

  return "You Loose";
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerSelection().toLowerCase();
  let results = compareSelections(computerSelection, playerSelection);

  console.log(results);
  console.log(`Computer played: ${computerSelection}`);

  if (results.includes("You Win")) {
    scores[1]++;
  } else if (results.includes("You Loose")) {
    scores[0]++;
  }
}