const number = +prompt("Enter any number");
let countOfNumbers = 0;
let sum = 0;

for (let i = 1; i <= number; i++) {
  if (i % 2 !== 0) {
    countOfNumbers++;
    sum += i;
  }
}

console.log(
  `The arithmetic mean of all odd numbers from 1 to ${number} is ${
    sum / countOfNumbers
  }`
);
