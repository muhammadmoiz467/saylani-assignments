// let display = document.getElementById("display");

// function press(value) {

//     if (value === "=") {
//         try {
//             display.innerText = eval(display.innerText);
//         } catch (error) {
//             display.innerText = "Error";
//         }
//     } 
//     else {
//         display.innerText += value;
//     }
// }

// function clearDisplay() {
//     display.innerText = "";
// }

// let display = document.getElementById("display")
// let firstNumber = "";
// let lastNumber = "";
// let operator = "";

// function press (value) {
//     if(operator === "") {
//         firstNumber += value
//         display.innerText = firstNumber
//     } else {
//         lastNumber += value
//         display.innerText = lastNumber
//     }
// }

// function operator (op) {
//     if (firstNumber === "") return
//     operator = op
// }

// function calculate () {
//     if (firstNumber === "" || lastNumber === "" || operator === "") return

//     let num1 = parseFloat(firstNumber)
//     let num2 = parseFloat(lastNumber)
//     let result = 0;

//     if (operator === "+") {
//         result = num1 + num2
//     } else if (operator === "-") {
//         result = num1 - num2
//     } else if (operator === "*") {
//         result = num1 * num2
//     } else if (operator === "/") {
//         result = num1 / num2
//     }
 
//     display.innerText = result

//     firstNumber = result.toString()
//     lastNumber = ""
//     operator = ""
// }

// function clearDisplay () {
//     firstNumber = "" 
//     lastNumber = ""
//     operator = ""
//     display.innerText = ""
// }


let display = document.getElementById("display")
let firstNumber = "";
let lastNumber = "";
let currentOperator = "";

// number press
function press(value) {
    if (currentOperator === "") {
        firstNumber += value
        display.innerText = firstNumber
    } else {
        lastNumber += value
        display.innerText = firstNumber + " " + currentOperator + " " + lastNumber
    }
}

// ✅ operator function wapas add karo
function setOperator(op) {
    if (firstNumber === "") return
    
    currentOperator = op
    display.innerText = firstNumber + " " + currentOperator
}

// calculate
function calculate() {
    if (firstNumber === "" || lastNumber === "" || currentOperator === "") return

    let num1 = parseFloat(firstNumber)
    let num2 = parseFloat(lastNumber)
    let result = 0;

    if (currentOperator === "+") {
        result = num1 + num2
    } 
    else if (currentOperator === "-") {
        result = num1 - num2
    } 
    else if (currentOperator === "*") {
        result = num1 * num2
    } 
    else if (currentOperator === "/") {
        if (num2 === 0) {
            display.innerText = "Error"
            return
        }
        result = num1 / num2
    }

    display.innerText = result

    firstNumber = result.toString()
    lastNumber = ""
    currentOperator = ""
}

// clear
function clearDisplay() {
    firstNumber = ""
    lastNumber = ""
    currentOperator = ""
    display.innerText = ""
}