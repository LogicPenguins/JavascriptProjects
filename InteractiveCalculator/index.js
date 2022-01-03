let num1 = 10
let num2 = 3
let current_output = document.getElementById('sum-el');

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    let output = "Sum: " + (num1 + num2);
    current_output.textContent = output;
}

function subtract() {
    let output = "Difference: " + (num1 - num2);
    current_output.textContent = output;
}

function divide() {
    let output = "Quotient: " + (num1 / num2);
    current_output.textContent = output;
}

function multiply() {
    let output = "Product: " + (num1 * num2);
    current_output.textContent = output;
}