let calcScreen = document.querySelector("#screen p");

let firstOperand = null,
    secondOperand = null,
    operator = null;

let operatorFlag = false;
function numberButton(e){
    if(operatorFlag){
        calcScreen.textContent = "";
        operatorFlag = false;
    }

    calcScreen.textContent += e.target.textContent;
    
};

function operatorButton(e){
    operatorFlag = true;
    //when an operator button is pressed, store the screen value to an operand
    if(firstOperand === null){ //first operand is empty
        firstOperand = parseFloat(calcScreen.textContent);
        calcScreen.textContent = "";
        console.log("logged value in operand 1");
    } else {//both are full.
    //if both are full, perform the operation and then store the result in firstOperand
    secondOperand = parseFloat(calcScreen.textContent);
    firstOperand = operate(operator, firstOperand, secondOperand);
    calcScreen.textContent = firstOperand;
    secondOperand = null;
    };

    operator = e.target.textContent;

};

function equalsButton(){
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
