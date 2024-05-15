"use strict";

// Functions:

// Set only the UI back to 0
const clearUI = () => {
  currentDisplay = "";
  resultOutput.value = 0;
};

// DOM Elements:
// Output / Display element:
const resultOutput = document.querySelector(".result");
// Operators buttons:
const opBtns = document.querySelectorAll(".char--operator");
// Numbers buttons:
const numBtns = document.querySelectorAll(".char--number");
// Equal button:
const equalBtn = document.querySelector(".char--equal");
// AC button:
const acBtn = document.querySelector(".char--ac");

// App:

// Set UI result to 0
resultOutput.value = 0;

// Track what is being displayed in the UI
let currentDisplay = "";
// Tracks the numbers, operations and results that we are going to eval
let output = "";

// Event Listeners:

// Display the number on the UI and add it to the output
numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    output = output + btn.textContent;
    currentDisplay = currentDisplay + btn.textContent;

    resultOutput.value = currentDisplay;

    console.log(currentDisplay);
    console.log(output);
  });
});

// Add the operator to the output and reset the UI result back to 0
opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Avoid repeating operators:
    if (
      output[output.length - 1] === "+" ||
      output[output.length - 1] === "-" ||
      output[output.length - 1] === "/" ||
      output[output.length - 1] === "*"
    ) {
      return;
    }

    if (btn.textContent === "÷") {
      output = output + "/";
    } else if (btn.textContent === "x") {
      output = output + "*";
    } else {
      output = output + btn.textContent;
    }

    clearUI();

    console.log(currentDisplay);
    console.log(output);
  });
});

// Use the "eval" function to display the result of the current output / operation,
// and set the operation to the result of the eval
equalBtn.addEventListener("click", () => {
  const result = eval(output);
  resultOutput.value = result;
  output = String(result);

  console.log(result);
  console.log(output);
});

// Reset both the result value and UI
acBtn.addEventListener("click", () => {
  clearUI();
  output = "";

  console.log(currentDisplay);
  console.log(output);
});
