let display = document.querySelector("input")
let buttons = document.querySelectorAll("#buttons button")


let currentExpression = "";

function clearDisplay() {
    currentExpression = "";
    display.value = 0;
}

function deleteLast() {
    if (currentExpression == 'Error') {
        clearDisplay();
        return;
    }
    currentExpression = currentExpression.slice(0, -1);
    if (currentExpression === "") {
        display.value = '0';
    } else {
        display.value = currentExpression;
    }
}

function calculate() {
    try {
        let finalExpression = currentExpression.replace(/%/g, '/100*');
        if (finalExpression === '') {
            display.value = '0';
            return;
        }
        let result = eval(finalExpression);
        if (!isFinite(result)) {
            currentExpression = 'Error';
            display.value = 'Error';
            return;
        }
        currentExpression = parseFloat(result.toFixed(10)).toString();
        display.value = currentExpression;
    }
    catch (error) {
        currentExpression = 'Error';
        display.value = 'Error';
    }
}

function appendValue(value) {
    if (currentExpression === 'Error') {
        currentExpression = '';
    }
    if (value === 'AC') {
        clearDisplay();
    } else if (value === 'DEL') {
        deleteLast();
    } else if (value === '=') {
        calculate();
    } else {
        currentExpression += value;
        display.value = currentExpression;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent
        appendValue(value)
    });
});

clearDisplay();