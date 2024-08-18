let displayValue = "0";

function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
}

function reset() {
  displayValue = "0";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue.replace(/x/g, "*")).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}
