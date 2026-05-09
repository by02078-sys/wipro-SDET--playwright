//problem 11
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

//problem 12

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const number = 19;
console.log(isPrime(number));

//problem 13

function getFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const num = 5;
console.log(getFactorial(num));
 
//problem 14
 
function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;
    const series = [];

    for (let i = 1; i <= n; i++) {
        series.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log(series.join(", "));
}

fibonacci(9);

// problem 15

function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;
}

const checkNum = 153;
console.log(isArmstrong(checkNum));