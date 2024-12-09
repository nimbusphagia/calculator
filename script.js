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
//CALCULATOR OPERATE FUNCTION
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
            if (b === 0){
                result = "( ｡ •̀ ᴖ •́ ｡)";
            } else {
                result = divide(a, b);
            }
            break;
        case "n^":
            result = power(a, b);
            break;
        case "^":
            result = power(a, b);
            break; 
        case "√n":
            result = root(a, b);
            break;
        case "√":
            result = root(a, b);
            break;    
    }
    return Math.ceil(result * 100000000) / 100000000;
}
//INPUT AND OUTPUT FUNCTION
const btnAll = Array.from(document.querySelectorAll(".button"));
const btnOperators = Array.from(document.querySelectorAll(".operator"));
const outputScreen = document.querySelector("#output");
const inputScreen = document.querySelector("#input");
let input = "";

function displayInput(event){
    if (inputScreen.textContent === "..."){
        input = event.target.textContent;
        inputScreen.textContent += input.replace("=", "").replace("n", "").replace("AC", "").replace("⌫", "").replace(/\D/g, "");
    }else{
        input = event.target.textContent;
        inputScreen.textContent += input.replace("=", "").replace("n", "").replace("AC", "").replace("⌫", "");
    }
    
}
function getTemp(event){
    temp += event.target.textContent.replace("AC", "").replace("⌫", "");
}

for(let i = 0; i < btnAll.length; i++){
    btnAll[i].addEventListener("click", displayInput);
    btnAll[i].addEventListener("click", getTemp);
}

//BACKSPACE AND CLEAR ALL
const btnAC = document.querySelector(".clearAll");
const btnBacktrack = document.querySelector(".delete");
let lastChar;
let newDisplay;
 

function clearAll(){
    inputScreen.textContent = "...";
    temp = "";
    operand1 = "";
    operand2 = "";
    operator = "";
    outputScreen.textContent = "output";
}

function backtrack(){
    if (proof === "=" || inputScreen.textContent === "..."){
        outputScreen.textContent = "(｡•́︿•̀｡)";
    } else if (!temp){
        lastChar = (inputScreen.textContent.length) - 1;
        newDisplay = inputScreen.textContent.substring(0, lastChar);
        inputScreen.textContent = newDisplay;
        deleted = num1;
        operator = "";
        console.log(deleted);           
        } else if(temp){
        lastChar = (inputScreen.textContent.length) - 1;
        newDisplay = inputScreen.textContent.substring(0, lastChar);
        inputScreen.textContent = newDisplay;
        lastChar = (temp.length) - 1;
        newDisplay = temp.substring(0, lastChar);
        temp = newDisplay;
        console.log(temp);
        }
}

btnAC.addEventListener("click", clearAll);
btnBacktrack.addEventListener("click", backtrack);

//NEW APPROACH
const btnContainer = document.querySelector("#btnContainer");
let num1 = "";
let operator = "";
let num2 = "";
let result = "";
let temp = "";
let deleted = "";
let proof = "";

function calculate (event){
    //!operator ? startMath() : continueMath();
    if (inputScreen.textContent === "..."){
        temp = "";
        inputScreen.textContent = "...";
        proof = "";
    } else if(!operator){
        operator = event.target.textContent;
        num1 = deleted ? deleted : temp.replace(operator, "");
        temp = "";
        deleted= "";
        proof = "";
    }else if (event.target.textContent === "="){
            num2 = temp.replace(event.target.textContent, "");
            result = operate(num1, operator, num2);
            operator = "";
            num1 = result;
            num2 = "";
            temp = result;
            outputScreen.textContent = result;
            proof = "=";
        } else {
            num2 = temp.replace(event.target.textContent, "");
            result = operate(num1, operator, num2);
            operator = event.target.textContent;
            num1 = result;
            num2 = "";
            temp = "";
            outputScreen.textContent = result;
            proof = "";
        }
}

btnContainer.addEventListener("click", ()=>{
    for(let i = 0; i < btnOperators.length; i++){
            btnOperators[i].addEventListener("click", calculate);
    }
})





