// Q5> Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.

type Unit = "px" | "rem" | "vh"
type MarginValue = `${number}${Unit}`;

const margin1: MarginValue = "10px";
const margin2: MarginValue = "2rem";
const margin3: MarginValue = "50vh";
const margin4: MarginValue = "1.5rem";

console.log(margin1);
console.log(margin2);
console.log(margin3);
console.log(margin4);

// const invalid1: MarginValue ="px";
// console.log(invalid1);