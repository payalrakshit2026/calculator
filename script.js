let inputBox = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "=") {
      try {
        string = eval(string);
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      inputBox.value = "";
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else {
      string += value;
      inputBox.value = string;
    }
  });
});
