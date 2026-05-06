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
    else if (value === "DEL") {
      expression = expression.slice(0, -1);
      screen.value = expression;
    } 
    else if (value === "=") {
      try {
        expression = eval(expression).toString();
        screen.value = expression;
      } catch {
        screen.value = "Error";
        expression = "";
      }
    } 
    else if (value === "%") {
      try {
        expression = (eval(expression) / 100).toString();
        screen.value = expression;
      } catch {
        screen.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      screen.value = expression;
    }
  });
});