const arr = [-2, 1, 5, 8, 17, 20, 21, 35, 48, 51];
let sum = 0;

arr.forEach((el) => {
  sum += el;
});

const newArr = arr.map((el) => el * 2);

const maxValue = arr.reduce((maxValue, current) => {
  if (maxValue < current) {
    maxValue = current;
  }
  return maxValue;
});

const minValue = arr.reduce((minValue, current) => {
  if (minValue > current) {
    minValue = current;
  }
  return minValue;
});

console.log(`The array's sum is ${sum}`);

console.log(`The new array is ${newArr}`);

console.log(`The highest value of arr is ${maxValue}`);

console.log(`The lowest value of arr is ${minValue}`);
