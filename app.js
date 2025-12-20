
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

// Answer6

// function factorialNumber() {
//     var num = +prompt("Enter a number:");
//     var factorial = 1;

//     for (var i = 1; i <= num; i++) {
//         factorial = factorial * i;
//     }

//     alert("Factorial is: " + factorial);
//     console.log("Factorial is:", factorial);

//     return factorial;
// }

// factorialNumber();

// Answer7

// function showCounting() {
//     var start = +prompt("Enter start number:");
//     var end = +prompt("Enter end number:");

//     var result = "";

//     for (var i = start; i <= end; i++) {
//         result = result + i + " ";
//     }

//     alert("Counting:\n" + result);
//     console.log("Counting:", result);

//     return result;
// }

// showCounting(); 

// Answer8

// function calculateHypotenuse() {

//     var base = +prompt("Enter base:");
//     var perpendicular = +prompt("Enter perpendicular:");

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
//     var hypotenuse = Math.sqrt(hypotenuseSquared);

//     alert("Hypotenuse is: " + hypotenuse);
//     console.log("Hypotenuse is:", hypotenuse);

//     return hypotenuse;
// }

// calculateHypotenuse();

// Answer9

// function calculateArea() {
//     var width = +prompt("Enter width of rectangle:");
//     var height = +prompt("Enter height of rectangle:");

//     var area = width * height;

//     alert("Area of rectangle is: " + area);
//     console.log("Area of rectangle is:", area);

//     return area;
// }

// calculateArea();

// Answer10

function checkPalindrome() {
    var word = prompt("Enter a word:");
    var reverseWord = "";

    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }

    if (word === reverseWord) {
        alert(word + " is a Palindrome");
        console.log(word + " is a Palindrome");
    } else {
        alert(word + " is NOT a Palindrome");
        console.log(word + " is NOT a Palindrome");
    }
}

checkPalindrome();
