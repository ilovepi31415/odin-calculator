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

btnClear.addEventListener('click', () => {clear()});


btn0.addEventListener('click', () => {
    addToScreen('0');
});
btn1.addEventListener('click', () => {
    addToScreen('1');
});
btn2.addEventListener('click', () => {
    addToScreen('2');
});
btn3.addEventListener('click', () => {
    addToScreen('3');
});
btn4.addEventListener('click', () => {
    addToScreen('4');
});
btn5.addEventListener('click', () => {
    addToScreen('5');
});
btn6.addEventListener('click', () => {
    addToScreen('6');
});
btn7.addEventListener('click', () => {
    addToScreen('7');
});
btn8.addEventListener('click', () => {
    addToScreen('8');
});
btn9.addEventListener('click', () => {
    addToScreen('9');
});

function clear() {
    display.textContent= '0';
}

function addToScreen(n) {
    if (display.textContent.length > 15) {
        return;
    }
    if (display.textContent == '0') {
        display.textContent = n;
        return;
    }
    display.textContent += n;
}

clear();