import './style.css';

const calcValues = document.getElementById("operands");
const calcResultValues = document.getElementById("result");
const allNumbers = document.querySelectorAll("[data-number]");
const allOperator = document.querySelectorAll("[data-operator]");
const equalOperator = document.getElementById('equalOperends');
const clearValue = document.getElementById('clearValues')

const evaluate = () => {
    const result = eval(calcValues.innerText);
    calcResultValues.innerText = result;
}

const appendText = (numbers) => {
    calcValues.innerText += numbers;
}

const keyborTextFunc = (event) => {
    console.log(event);
    if (
        (event.which >= 48 && event.which <= 57) ||
        (event.keyCode >= 96 && event.keyCode <= 111) ||
        event.keyCode === 13
    ) {
        if (event.keyCode === 13) evaluate();
        else appendText(event.key);
    }
    else {
        return false;
    }
}

const appendTextFunc = (event) => {
    if (event.type === 'click') {
        appendText(event.target.innerText);
    }

    else if (event.type === 'keydown') {
        keyborTextFunc(event)
    }
}

const setNumberClickListeners = (numEl) => {
    numEl.addEventListener('click', appendTextFunc)
}

allNumbers.forEach(numEl => {
    setNumberClickListeners(numEl)
})

allOperator.forEach(numEl => {
    setNumberClickListeners(numEl)
})

const clearData = () => {
    calcValues.innerText = '';
    calcResultValues.innerText = 0;
}

equalOperator.addEventListener('click', evaluate);

clearValue.addEventListener('click', clearData);

document.body.addEventListener('keydown', appendTextFunc);
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        clearData();
    }
});


