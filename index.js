// function to perform simple arithmetic operations

// take the operator input
const operator = prompt('Welcome 🤝🤝 please enter an operator to perform  a calculation: \n\n" + " :  Addition.\n " - " :   Subtraction.\n " * " :   Multiplication.\n " / " :   Division.');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result = 0;
const calculations = (number1, number2) => {
    result = number1 + number2;
    // using if...else if... else
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2; 
    }
    else if ( operator == '/' ) {
        result = number1 / number2;
    }
    // else (operator != '+' || operator != '-' || operator != '*' || operator != '/')
    //     alert('Please enter a valid operator');
    // return result;
}

//Displaying the result
displayCalculations = `The Result of ${number1} ${operator} ${number2} is : ${result} ... ✍️ `;
// console.log(displayCalculations);
alert(displayCalculations);
