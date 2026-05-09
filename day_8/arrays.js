//problem 16
const numbers = [24, 5, 78, 12, 90, 3];
let smallest = numbers[0];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i];
    if (numbers[i] > largest) largest = numbers[i];
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);

//problem 17
 const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);

//problem 18
const unsorted = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < unsorted.length; i++) {
    for (let j = 0; j < unsorted.length - i - 1; j++) {
        if (unsorted[j] > unsorted[j + 1]) {
            let temp = unsorted[j];
            unsorted[j] = unsorted[j + 1];
            unsorted[j + 1] = temp;
        }
    }
}

console.log(unsorted);

//problem 19
const values = [10, 20, 4, 45, 99, 99, 67];
let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < values.length; i++) {
    if (values[i] > first) {
        second = first;
        first = values[i];
    } else if (values[i] > second && values[i] !== first) {
        second = values[i];
    }
}

console.log("Second Largest:", second);

//problem 20
 const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const merged = [...array1, ...array2];
const result = [];

for (let i = 0; i < merged.length; i++) {
    if (result.indexOf(merged[i]) === -1) {
        result.push(merged[i]);
    }
}

console.log(result);