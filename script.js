let calcScreen = document.querySelector("#screen p");

let savedValue = null,
    operator = null;

let displayingAnswer = false;
function numberButton(e){
    if(displayingAnswer){
        calcScreen.textContent = "";
        displayingAnswer = false;
    }

    calcScreen.textContent += e.target.textContent;

};

function operatorButton(e){

    if(!(savedValue === null)){ //what's on screen must be the 2nd operand
        savedValue = equalsButton();

    } else {
        savedValue = parseFloat(calcScreen.textContent);
        calcScreen.textContent = "";
    };

    operator = e.target.textContent
};

function equalsButton(){
    displayingAnswer = true;

    if(!operator){
        return;
    } else {
        let screenValue = parseFloat(calcScreen.textContent);
        savedValue = operate(operator, savedValue, screenValue);
        calcScreen.textContent = savedValue;
        operator = null;
        savedValue = null;
        return calcScreen.textContent;
    };
};

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, a, b){
    switch(op){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let numButtons = document.querySelectorAll(".numbers button");
let oprButtons = document.querySelectorAll(".operators button");

for(let button of numButtons){
    button.addEventListener("click", numberButton);
};

for(let button of oprButtons){
    if(!(button.textContent === "="))
        button.addEventListener("click", operatorButton);
}

document.querySelector("#btn-eql").addEventListener("click", equalsButton);
