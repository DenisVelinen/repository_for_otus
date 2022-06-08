function diff(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

console.log(`The difference between the entered numbers is ${diff(5, 15)}`);

function isWord(stringValue) {
  const arrayOfStringValue = stringValue.split(' ');
  if (arrayOfStringValue.length > 1) {
    return 'false';
  } else {
    return 'true';
  }
}

console.log(`Is there one word in the phrase? ${isWord('A text')}`);

const number = 4;
const raisePower = 10;

function pow(a, x) {
  let raisedNumber = 1;

  for (let i = 1; i <= x; i++) {
    raisedNumber = raisedNumber * a;
  }

  return raisedNumber;
}

console.log(`The number ${number} raised to the power of ${raisePower} is ${pow(number, raisePower)}`);
