//VARIABLES
let operation = prompt("Which operation do you want to perform?:\n 'add' for Addition\n 'sub' for Subtraction\n 'multiply' for Multiplication\n 'divide' for Division");
let x = prompt(("Enter the first number:"));
let y = prompt(("Enter the second number:"));

//CONTROL
let add = () => {
    let result = Number(x) + Number(y);
    alert(result);
}

let subtract = () => {
    let result = Number(x) - Number(y);
    alert(result);
}

let multiply = () => {
    let result = Number(x) * Number(y);
    alert(result);
}

let divide = () => {
    let originalResult = (Number(x) / Number(y)).toFixed(5);
    if ((Number.isInteger(originalResult) == false) && (originalResult > 1)) {
        let remainder = Number(x) % Number(y)
        let noOfTimes = (Number(x.value) - remainder) / Number(y.value)
        let result = `${noOfTimes} r ${remainder} | ${originalResult}`;
        alert(result);
    } else {
        alert(originalResult);
    }
}

if (operation == 'add') add();
else if (operation == 'subtract') subtract();
else if (operation == 'multiply') multiply();
else if (operation == 'divide') divide();
