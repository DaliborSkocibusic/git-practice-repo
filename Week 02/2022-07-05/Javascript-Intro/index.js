// Variables and types

let x = 1; // Mutable variable type in javascript
x = 3;
console.log("Hello world!");
console.log("x is: " + x);

const y = 3; // Constant variable type in javascript

console.log("The data type for 5 is " + typeof 5);
console.log("The data type for Hello World is " + typeof "Hello World");

console.log(typeof true);

// Reserved keywords
undefined;
null;
NaN;

// Comparison checking

let a = 1;
let b = 2/2;

console.log(a == b);

console.log(a === b);

// Single & is bitwise check. Wont
// Make check on the right side if the left
// Fails

// a & b
// a && b

let a1 = x == y | y != x;
console.log(a1);

let e = 17 % 7;
console.log(e);


// Challenge

let firstName = "Dalibor";
let lastName = "Skocibusic";
let age = 37;

newString = "Hi, my name is " + firstName + " " + lastName + " and I am " + age + " years old.";
console.log(newString);