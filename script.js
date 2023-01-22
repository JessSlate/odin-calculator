let calcScreen = document.querySelector("#screen p");

let savedValue = null,
    operator = null;

let displayingAnswer = false;

function numberButton(e){
    if(displayingAnswer){
        calcScreen.textContent = "";
    }
    displayingAnswer = false;
    
    console.log(calcScreen.textContent.includes("."));
    if(calcScreen.textContent.split("").length < 10)
        calcScreen.textContent += e.target.textContent;
 

    /*
    if(calcScreen.textContent.split("").length > 9)
        return;
    
    if(e.target.textContent == "+/-"){
        if(parseFloat(calcScreen.textContent))
            calcScreen.textContent = parseFloat(calcScreen.textContent) * -1;
    } else if(e.target.textContent == ".") {
        if(!calcScreen.textContent.includes(".")){
            calcScreen.textContent += e.target.textContent;
        }
    } else calcScreen.textContent += e.target.textContent; 
    */
        
};

function negate(){
    if(!displayingAnswer){
        if(parseFloat(calcScreen.textContent))
            calcScreen.textContent = parseFloat(calcScreen.textContent) * -1;
    };
};

function decimalButton(){
    if(displayingAnswer){
        calcScreen.textContent = "";
    }
    displayingAnswer = false;

    let hasDecimal = calcScreen.textContent.includes(".");
    if(hasDecimal){
        return;
    } else {
        calcScreen.textContent += ".";
    }
};

function operatorButton(e){
    // '+', '-', '*', '/'
    if(!(savedValue === null)){
        //if there is already a saved value: evaluate the previous equation, display the answer, then save it.
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

//calculator will round to 3 decimal points
function add(a, b){
    let ans = a + b;
    return Math.round(ans * 1000) / 1000;
};

function subtract(a, b){
    let ans = a - b;
    return Math.round(ans * 1000) / 1000;
};

function multiply(a, b){
    let ans = a * b;
    return Math.round(ans * 1000) / 1000;
};

function divide(a, b){
    let ans = a / b;
    return Math.round(ans * 1000) / 1000;
};

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
    };
};

let numButtons = document.querySelectorAll(".numbers button");
let oprButtons = document.querySelectorAll(".operators button");

for(let button of numButtons){
    if(!isNaN(button.textContent)) //only assign numberButton to 0-9
        button.addEventListener("click", numberButton);
};
document.querySelector("#btn-dec").addEventListener("click", decimalButton);
document.querySelector("#btn-neg").addEventListener("click", negate);

for(let button of oprButtons){
    if(!(button.textContent === "="))
        button.addEventListener("click", operatorButton);
};
document.querySelector("#btn-eql").addEventListener("click", equalsButton);
