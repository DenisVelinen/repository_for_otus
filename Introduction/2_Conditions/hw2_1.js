const firstNumber = +prompt("Enter any number");
const secondNumber = +prompt("Enter any other number");

if (firstNumber < secondNumber) {
  console.log(`The highest number was the second ${secondNumber}`);
} else if (firstNumber > secondNumber) {
  console.log(`The highest number was the first ${firstNumber}`);
} else if (firstNumber === secondNumber) {
  console.log("Both numbers are the same");
} else {
  console.log("A not a number has been introduced");
}
