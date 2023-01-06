const number = prompt("Enter any but three-digit number");
let sum = 0;

if (number.length < 3) {
  console.log("You have entered less than 3 digits");
} else if (number.length > 3) {
  console.log("You have entered more than 3 digits");
} else {
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(
    `You have entered the number ${number}. The sum of these digits is ${sum}`
  );
}
