"use strict";
// Part A: Basics (20 Qs)
// 1. Declare a variable age of type number and assign it a value.
let age = 21;
console.log(age);
// 2. Create a variable that can hold either a string or a number.
let userId;
userId = 101;
console.log(userId);
userId = "EMP101";
console.log(userId);
// 3. Define a tuple with a string and a boolean.
let person = ["Mohit", true];
console.log(person);
// 4. Write an enum Role with values Admin, User, Guest.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Guest);
let employeeId = 101;
employeeId = "EMP101";
console.log(employeeId);
// 6. Write a function add that takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// 7. Write a function printName that accepts an object with firstName and optional lastName.
function printName(person) {
    console.log(person.firstName, person.lastName ?? "");
}
printName({
    firstName: "Mohit",
    lastName: "Yadav",
});
// 8. Write a function that accepts an array of numbers and returns the largest number.
function largestNumber(numbers) {
    return Math.max(...numbers);
}
console.log(largestNumber([10, 50, 80, 25]));
const person1 = {
    name: "Mohit",
    age: 21,
};
console.log(person1);
const user = {
    id: 1,
    name: "Mohit",
};
console.log(user);
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));
// 12. Write a function that accepts string | number and logs its type.
function checkType(value) {
    console.log(typeof value);
}
checkType("Hello");
checkType(100);
let direction = "north";
console.log(direction);
// 14. Write a function isEven.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(8));
// 15. Write a function reverseString.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("TypeScript"));
// 16. Write a function filterOdd that removes odd numbers.
function filterOdd(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
console.log(filterOdd([1, 2, 3, 4, 5, 6]));
const employee = [101, "Mohit", true];
console.log(employee);
// 18. Return positive, negative or zero.
function checkNumber(num) {
    if (num > 0)
        return "positive";
    if (num < 0)
        return "negative";
    return "zero";
}
console.log(checkNumber(-10));
console.log(checkNumber(0));
console.log(checkNumber(10));
// 19. Convert array of strings to uppercase.
function toUpperCaseArray(arr) {
    return arr.map((word) => word.toUpperCase());
}
console.log(toUpperCaseArray(["mohit", "typescript", "react"]));
// 20. Function with never type.
function throwError(message) {
    throw new Error(message);
}
// Example
// throwError("Something went wrong");
