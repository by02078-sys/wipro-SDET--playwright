//problem 6
let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

//problem 7
let text = "Hello World";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log(count);

//problem 8
let word = "racecar";
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);

//problem 9
let sentence = "learning javascript is fun";
let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

console.log(words.join(" "));

//problem 10
let phrase = "I am becoming a web developer";
let individualWords = phrase.split(" ");
let longest = "";

for (let word of individualWords) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);
