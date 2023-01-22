let calcScreen = document.querySelector("#screen p");

let operand1 = null,
    operand2 = null,
    operator = null;


function numberButton(e){
    //what happens when a number button is pressed
    calcScreen.textContent += e.target.textContent;

    if(!operator){
        operand1 = calcScreen.textContent;
    } else {
        operand2 = calcScreen.textContent;
    }
}

function operatorButton(e){
    //if both the operands are filled, act like the '=' button
    if(operand1 && operand2){
        operand1 = operate(operator, operand1, operand2);
        operand2 = null;
        calcScreen.textContent = operand1;
    } else if(!operand1){
        operand1 = calcScreen.textContent;
        calcScreen.textContent = "";
    } else{
        operand2 = calcScreen.textContent;
        calcScreen.textContent = "";
    }
    operator = e.target.textContent;
}
function equalsButton(){
    if(operand1 && operand2){
        calcScreen.textContent = operate(operator, operand1, operand2);
        operand1 = null;
        operand2 = null;
        operator = null;
    } else return;
}

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
    a = parseInt(a);
    b = parseInt(b);
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
    button.addEventListener("click", operatorButton);
}

document.querySelector("#btn-eql").addEventListener("click", equalsButton);
