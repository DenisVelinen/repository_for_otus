const circleArea = +prompt('Clarify the area of a circle');
const squareArea = +prompt('Clarify the area of a square');

const squareSide = Math.sqrt(squareArea);

const radius = Math.sqrt(circleArea / Math.PI);
const diameter = radius * 2;

if (diameter < squareSide)  {
  console.log(`The circle with area ${circleArea} fits into the square with area ${squareArea}`);
} else {
  console.log(`The circle with area ${circleArea} does not fit into the square with area ${squareArea}`);
}
