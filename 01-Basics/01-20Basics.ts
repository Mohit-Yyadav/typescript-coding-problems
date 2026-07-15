// Part A: Basics (20 Qs)

// 1. Declare a variable age of type number and assign it a value.

let age: number = 21;

console.log(age);

// 2. Create a variable that can hold either a string or a number.

let userId: string | number;

userId = 101;
console.log(userId);

userId = "EMP101";
console.log(userId);

// 3. Define a tuple with a string and a boolean.

let person: [string, boolean] = ["Mohit", true];

console.log(person);

// 4. Write an enum Role with values Admin, User, Guest.

enum Role {
  Admin,
  User,
  Guest,
}

console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Guest);

// 5. Create a type alias ID that can be either string or number.

type ID = string | number;

let employeeId: ID = 101;
employeeId = "EMP101";

console.log(employeeId);

// 6. Write a function add that takes two numbers and returns their sum.

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// 7. Write a function printName that accepts an object with firstName and optional lastName.

function printName(person: {
  firstName: string;
  lastName?: string;
}): void {
  console.log(person.firstName, person.lastName ?? "");
}

printName({
  firstName: "Mohit",
  lastName: "Yadav",
});

// 8. Write a function that accepts an array of numbers and returns the largest number.

function largestNumber(numbers: number[]): number {
  return Math.max(...numbers);
}

console.log(largestNumber([10, 50, 80, 25]));

// 9. Define an interface Person with name and age.

interface Person {
  name: string;
  age: number;
}

const person1: Person = {
  name: "Mohit",
  age: 21,
};

console.log(person1);

// 10. Create a readonly property id in a User interface.

interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Mohit",
};

console.log(user);

// 11. Define a function type alias MathOp and implement multiply.

type MathOp = (a: number, b: number) => number;

const multiply: MathOp = (a, b) => a * b;

console.log(multiply(5, 6));

// 12. Write a function that accepts string | number and logs its type.

function checkType(value: string | number): void {
  console.log(typeof value);
}

checkType("Hello");
checkType(100);

// 13. Create a literal type for directions.

type Direction = "north" | "south" | "east" | "west";

let direction: Direction = "north";

console.log(direction);

// 14. Write a function isEven.

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(8));

// 15. Write a function reverseString.

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("TypeScript"));

// 16. Write a function filterOdd that removes odd numbers.

function filterOdd(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterOdd([1, 2, 3, 4, 5, 6]));

// 17. Define a tuple type and create one instance.

type Employee = [number, string, boolean];

const employee: Employee = [101, "Mohit", true];

console.log(employee);

// 18. Return positive, negative or zero.

function checkNumber(num: number): string {
  if (num > 0) return "positive";
  if (num < 0) return "negative";
  return "zero";
}

console.log(checkNumber(-10));
console.log(checkNumber(0));
console.log(checkNumber(10));

// 19. Convert array of strings to uppercase.

function toUpperCaseArray(arr: string[]): string[] {
  return arr.map((word) => word.toUpperCase());
}

console.log(toUpperCaseArray(["mohit", "typescript", "react"]));

// 20. Function with never type.

function throwError(message: string): never {
  throw new Error(message);
}

// Example
// throwError("Something went wrong");