
// Answer1

// function showDateTime() {
//     var now = new Date();
//     alert("Current Date & Time:\n" + now);
//     console.log("Current Date & Time:", now);
// }

// showDateTime();

// Answer2

// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");

//     // Capitalize first letter of each name
//     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//     lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

//     var fullName = firstName + " " + lastName;

//     alert("Hello " + fullName);
//     console.log("Hello " + fullName);
// }

// greetUser();

// Answer3

// function addNumbers() {
//     var num1 = +prompt("Enter first number:");
//     var num2 = +prompt("Enter second number:");

//     var sum = num1 + num2;

//     alert("Sum is: " + sum);
//     console.log("Sum is:", sum);

//     return sum;
// }

// addNumbers();

// Answer4

// function calculator() {
//     var num1 = +prompt("Enter first number:");
//     var num2 = +prompt("Enter second number:");
//     var operator = prompt("Enter operator (+, -, *, /):");

//     var result;

//     if (operator === "+") {
//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "*") {
//         result = num1 * num2;
//     }
//     else if (operator === "/") {
//         result = num1 / num2;
//     }
//     else {
//         alert("Invalid operator");
//         return;
//     }

//     alert("Result is: " + result);
//     console.log("Result is:", result);

//     return result;
// }

// calculator();

// Answer5

// function squareNumber() {
//     var num = +prompt("Enter a number:");

//     var result = num * num;

//     alert("Square of the number is: " + result);
//     console.log("Square of the number is:", result);

//     return result;
// }

// squareNumber();

// Answer5

function factorialNumber() {
    var num = +prompt("Enter a number:");
    var factorial = 1;

    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    alert("Factorial is: " + factorial);
    console.log("Factorial is:", factorial);

    return factorial;
}

factorialNumber();