//Alert to open console
let alertShown = sessionStorage.getItem("alertShown");

if (!alertShown) {
  alert("Open the Console to start the game");

  sessionStorage.setItem("alertShown", true);
}
