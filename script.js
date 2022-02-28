const screen = document.getElementById("screen");
const btn7 = document.getElementById("btn-7");
btn7.addEventListener("click", () => {
  console.log("7 is clicked");
  document.getElementById("screen").innerHTML += "7";
});
