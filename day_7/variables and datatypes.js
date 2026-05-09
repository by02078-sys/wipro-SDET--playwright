// problem 1 
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// problem 2 
function checkType(val) {
  if (val === null) return "null";
  return typeof val;
}

console.log(checkType(100));
console.log(checkType("Hello"));
console.log(checkType(true));
console.log(checkType(undefined));
console.log(checkType(null));

// problem 3 
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);

// problem 4
let num1 = 15;
let num2 = 5;
let operator = "+";
let result;

if (operator === "+") result = num1 + num2;
else if (operator === "-") result = num1 - num2;
else if (operator === "*") result = num1 * num2;
else if (operator === "/") result = num1 / num2;

console.log(result);
// problem 5 
let birthYear = 1998;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log(age);
