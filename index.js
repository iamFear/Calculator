"use strict";

// Functions:

// Display the output
const displayOutput = (output) => {
  resultOutput.value = output;
};

// Clear the UI and all the variables history (only for AC button)
const allClear = () => {
  resultOutput.value = 0;
  output = "";
};
// Clear the UI, keeping the variables intact (only for Operators buttons)
const clearOutput = () => {
  resultOutput.value = 0;
  output = "";
};

// DOM Selection:

// UI Output
const resultOutput = document.querySelector(".result");
// AC Button
const acBtn = document.querySelector(".char--ac");
// Number Buttons
const numberBtns = document.querySelectorAll(".char--number");
// Operators Buttons
const opBtns = document.querySelectorAll(".char--operator");

// Setting the output value by default to 0
resultOutput.value = 0;

// Variables:

let output = "";

// Event Listeners:

// Number Buttons functionality:
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    // Capture the input number and display it in the UI
    output += btn.textContent;
    displayOutput(output);
  })
);

// AC button functionality: clean UI and operations history
acBtn.addEventListener("click", () => {
  allClear();
});

// Operators button functionality
opBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove the current value from the UI and set it back to 0
    clearOutput();
  });
});
