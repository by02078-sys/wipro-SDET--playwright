let a ="balu";
let b="abhi";
let c="akhi";
//console.log("hello " + a + ","+b+"and"+c+"!");
let d='hello ${a}, ${b} and ${c}!';
console.log(d);

let sum = (x, y) => x + y; 
console.log("Sum of 5 and 10:", sum(5, 10)); 

let arr = [1, 2, 3, 4, 5, "balu"];


arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));