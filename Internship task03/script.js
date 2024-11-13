let displayValue = '0';
let firstOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (displayValue === '0' || shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperation(operator) {
    if (currentOperation !== null) calculate(); // Calculate if an operation is pending

    firstOperand = parseFloat(displayValue);
    currentOperation = operator;
    shouldResetDisplay = true; // The next number entered will reset the display
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;

    let secondOperand = parseFloat(displayValue);
    if (currentOperation === '+') {
        displayValue = (firstOperand + secondOperand).toString();
    } else if (currentOperation === '-') {
        displayValue = (firstOperand - secondOperand).toString();
    }

    firstOperand = parseFloat(displayValue);
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    currentOperation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}