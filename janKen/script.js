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