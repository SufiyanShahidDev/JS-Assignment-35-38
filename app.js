
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

function addNumbers() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");

    var sum = num1 + num2;

    alert("Sum is: " + sum);
    console.log("Sum is:", sum);

    return sum;
}

addNumbers();