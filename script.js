// Load HTML elements
const display = document.querySelector('.screen');
const btnClear = document.querySelector('#clear');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#subtract');
const btnMult = document.querySelector('#multiply');
const btnDiv = document.querySelector('#divide');
const btnNegative = document.querySelector('#negative');
const btnPercent = document.querySelector('#percent');
const evalButtons = document.querySelectorAll('.eval');

// Flags
let cleared = true;
let resetScreen = false;
let activeOperand = null;
let equationInProgress = false;

let temp;

btnClear.addEventListener('click', () => {clear()});

const numbers = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
const operands = [btnAdd, btnSub, btnMult, btnDiv];

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        addToScreen(btn.textContent);
    });
});

operands.forEach(btn => {
    btn.addEventListener('click', () => {
        temp = null;
        operate(btn.textContent);
    });
});

evalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        evaluate();
    });
});

btnNegative.addEventListener('click', () => {
    if (equationInProgress) {
        display.textContent = (parseFloat(display.textContent) * -1).toString();
    }
});

btnPercent.addEventListener('click', () => {
    display.textContent = checkSmall(parseFloat(display.textContent) / 100).toString().slice(0, 16);
});

function clear() {
    cleared = true;
    resetScreen = false;
    ans = null;
    display.textContent= '0';
    resetButtons();
}

function addToScreen(n) {
    cleared = false;
    if (display.textContent == '0' || resetScreen) {
        display.textContent = n;
        resetScreen = false;
        if (!equationInProgress) {resetButtons();}
        equationInProgress = true;
        return;
    }
    if (display.textContent.length > 15) {
        return;
    }
    display.textContent += n;
}

function operate(op) {
    if (cleared) {
        return;
    }
    activeOperand = op;
    equationInProgress = true;
    operands.forEach(btn => {
        if (btn.textContent == op) {
            btn.classList.add('active');
        }
        else {
            btn.classList.remove('active');
        }
    });
    ans = display.textContent;
    resetScreen = true;
}

function evaluate() {
    if (ans == null) {
        return;
    }

    let res;

    number1 = temp ? parseFloat(display.textContent) : parseFloat(ans);
    number2 = temp ? temp : parseFloat(display.textContent);

    if (!temp) {
        temp = number2;
    }
    
    if (isNaN(parseFloat(display.textContent))) {
        clear();
        return;
    }

    switch(activeOperand) {
        case '+':
            res = number1 + number2;
            break;
        case '-':
            res = number1 - number2;
            break;
        case '*':
            res = number1 * number2;
            break;
        case '/':
            if (number2 != 0) {
                res = number1 / number2;
                break;
            }
            res = 'ERR';
            break;
    }

    resetScreen = true;
    equationInProgress = false;
    if (res >= 10000000000000000) {
        display.textContent = 'ERR';
    }
    else {
        display.textContent = checkSmall(res).toString().slice(0, 16);
    }
}

function checkSmall(x) {
    return Math.abs(x) < .000000001 ? 0 : x;
}

function resetButtons() {
    operands.forEach(btn => {
        btn.classList.remove('active');
    });
    activeOperand = null;
}

clear();