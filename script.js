let display = document.querySelector("#screen p");

function getButtonValue(e){
    console.log(e.target.textContent);
    display.textContent += e.target.textContent;
}


let buttons = document.querySelectorAll(".numbers button, .operators button");

for(let button of buttons){
    button.addEventListener("click", getButtonValue);
};
