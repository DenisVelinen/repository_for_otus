const arr = [-2, 1, 5, 8, 17, 20, 21, 35, 48, 51];
let sum = 0;

arr.forEach(function (el) {
  sum += el;
})

let newArr = arr.map(function (el) {
  return el * 2;
})

let maxValue = arr.reduce(function(maxValue, current) {
  if (maxValue < current) {
    maxValue = current;
  }
  return maxValue;
});

let minValue = arr.reduce(function(minValue, current) {
  if (minValue > current) {
    minValue = current;
  }
  return minValue;
});

console.log(`The array's sum is ${sum}`);

console.log(`The new array is ${newArr}`);

console.log(`The highest value of arr is ${maxValue}`);

console.log(`The lowest value of arr is ${minValue}`);
