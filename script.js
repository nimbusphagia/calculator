//MATH FUNCTIONS
function add(a,b){
    return a + b;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function power(a,b){
    return Math.pow(a, b);
}
function root(a,b){
    return Math.pow(a, 1/b);
}
//CALCULATOR FUNCTIONS
function operate(num1, op, num2){
    let a = +num1;
    let b = +num2;
    let result = 0;
    switch(op){
        case "+":
            result = add(a, b);
            break;
        case "−":
            result = substract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "×":
            result = multiply(a, b);
            break; 
        case "×":
            result = multiply(a, b);
            break;     
        case "/":
            result = divide(a, b);
            break;
        case "÷":
            result = divide(a, b);
            break;
        case "n^":
            result = power(a, b)
            break;
        case "√n":
            result = root(a, b)
            break;  
    }
    return result;
}
//INPUT FUNCTION
const btnAll = Array.from(document.querySelectorAll(".button"));
let inputScreen = document.querySelector("#input");
let inputContent = "";
let tempContent = "";

function getInput(event){
    const input = event.target.textContent;
    inputScreen.textContent += input.replace("=", "");
}
function getTempContent(event){
    const tempInput = event.target.textContent;
    tempContent += tempInput;
}

for(let i = 0; i < btnAll.length; i++){
    btnAll[i].addEventListener("click", getInput);
    btnAll[i].addEventListener("click", getTempContent);
}

const btnOperators = Array.from(document.querySelectorAll(".operator"));

let operator;
let operand1;
let operand2;

for(let i = 0; i < btnOperators.length; i++){
    btnOperators[i].addEventListener("click", getOperands);
}
function getOperands(event){
    operator = event.target.textContent;
    operand1 = tempContent.replace(operator,"");
    tempContent = "";
}

const btnMath = document.querySelector(".result");
const outputScreen = document.querySelector("#output");

btnMath.addEventListener("click", getMath); 

function getMath(){
    operand2 = tempContent.replace("=","");
    tempContent = "";
    outputScreen.textContent = operate(operand1, operator, operand2);
    tempContent = operate(operand1, operator, operand2);
}
console.log();