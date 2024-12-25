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

// Flags
let cleared = true;
let screenStored = false;
let activeOperand = null;

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
        operate(btn.textContent);
    });
});

function clear() {
    cleared = true;
    display.textContent= '0';
}

function addToScreen(n) {
    if (display.textContent.length > 15) {
        return;
    }
    cleared = false;
    if (display.textContent == '0' || screenStored) {
        display.textContent = n;
        screenStored = false;
        return;
    }
    display.textContent += n;
}

function operate(op) {
    if (cleared) {
        return;
    }
    activeOperand = op;
    operands.forEach(btn => {
        if (btn.textContent == op) {
            btn.classList.add('active');
        }
        else {
            btn.classList.remove('active');
        }
    });
    ans = display.textContent;
    screenStored = true;
}

function evaluate() {
    return;
}

clear();