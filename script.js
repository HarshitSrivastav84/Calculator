// let x = document.querySelectorAll("button");
// x.eventListener("click").


const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
      screen.value = "";
    } 
    else {
      expression += value;
      screen.value = expression;
    }
  });
});