let displayValue = '0';

function appendToDisplay(val) {
    if (displayValue === '0' && val !== '.' && !isOperator(val)) {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function isOperator(val) {
    return ['+', '-', '*', '/'].includes(val);
}
