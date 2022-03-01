const screen = document.getElementById("screen");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn6 = document.getElementById("btn-6");
const btn5 = document.getElementById("btn-5");
const btn4 = document.getElementById("btn-4");
const btn3 = document.getElementById("btn-3");
const btn2 = document.getElementById("btn-2");
const btn1 = document.getElementById("btn-1");
const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");
const btnTimes = document.getElementById("btn-times");
const btnDivide = document.getElementById("btn-divide");
const btnDel = document.getElementById("btn-del");
const btnClear = document.getElementById("btn-C");
const btnComma = document.getElementById("btn-comma");
const btnEqual = document.getElementById("btn-equal");

btn7.addEventListener("click", () => {
  console.log("7 is clicked");
  document.getElementById("screen").innerHTML += "7";
});

btn9.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "9";
});

btn8.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "8";
});

btn6.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "6";
});

btn5.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "5";
});

btn4.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "4";
});

btn3.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "3";
});

btn2.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "2";
});

btn1.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "1";
});

btnMinus.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "-";
});

btnPlus.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "+";
});

btnTimes.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "*";
});

btnDivide.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += "/";
});

btnClear.addEventListener("click", () => {
  document.getElementById("screen").innerText = "";
});

btnDel.addEventListener("click", () => {
  let text = document.getElementById("screen").innerText;
  text = text.substring(0, text.length - 1);
  document.getElementById("screen").innerHTML = text;
});

btnComma.addEventListener("click", () => {
  document.getElementById("screen").innerHTML += ".";
});

btnEqual.addEventListener("click", () => {
  let result = eval(document.getElementById("screen").innerText);
  if (result != undefined) {
    document.getElementById("screen").innerHTML = result;
  }
});
