const answer = document.getElementById("answer");
answer.innerText = "0";

let result = 0;

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  answer.innerText = "0";
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function () {
  let array = answer.innerText.split("");
  array.pop();
  if (array.length > 0) {
    answer.innerText = array.join("");
  } else {
    answer.innerText = "0";
  }
});

const buttons = document.querySelectorAll(".number");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (answer.innerText === "0") {
      answer.innerText = button.innerText;
    } else if (answer.innerText == result) {
      answer.innerText = button.innerText;
    } else {
      answer.innerText += button.innerText;
    }
  });
});

const plusButton = document.getElementById("addition");
plusButton.addEventListener("click", function () {
  let tmp = parseInt(answer.innerText);
  answer.innerText = "0";
  tmp += parseInt(answer.innerText);
  if (tmp !== null) {
    result += tmp;
  }
});

const minusButton = document.getElementById("subtraction");
minusButton.addEventListener("click", function () {});

const timesButton = document.getElementById("multiplication");
timesButton.addEventListener("click", function () {});

const divideButton = document.getElementById("division");
divideButton.addEventListener("click", function () {});

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  answer.innerText = result;
});
