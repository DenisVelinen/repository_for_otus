const aSide = 3;
const bSide = 4;
const cSide = 5;

if (Math.pow(cSide, 2) === Math.pow(aSide, 2) + Math.pow(bSide, 2)) {
  console.log(`The triangle is rectangular`);
} else {
  console.log(`The triangle is not rectangular`);
}

const radius = +prompt(`Enter the radius of the circle`);

const p = 2 * Math.PI * radius;
const s = Math.PI + Math.pow(radius, 2);

console.log(`Length of circle with radius ${radius} is ${p}`);
console.log(`Area of circle with radius ${radius} is ${s}`);

/*const numbers = prompt(`Enter three numbers, separated by a space, to solve the quadratic equation`);
const [a, b, c] = numbers.split(' ');

if (Number(a) !== 0 && Number(b) !== 0 && Number(c) !== 0) {
  const d = Math.pow(b,2) - 4 * a * c;
  if (d < 0) {
    console.log(`D < 0 no square root`);
  } else if (d === 0) {
    console.log(`there is a single square root`);
  } else if (d > 0) {
    console.log(`there are two different square roots`);
  }
  console.log(d);
} else if (Number(a) !== 0 && Number(b) === 0 && Number(c) !== 0) {
  //ax2 + c = 0
  if (-c/a < 0) {
    console.log(`${-c/a} < 0 корней нет`);
  } else if (-c/a > 0) {
    console.log(`${-c/a} > 0 корней нет`);
  }
} else if (Number(a) !== 0 && Number(b) !== 0 && Number(c) === 0) {
  //ax2 + bx = 0
} else if (Number(a) !== 0 && Number(b) === 0 && Number(c) === 0) {
  //ax2 = 0
  console.log(`b is ${b} and c is ${c} so a quadratic equation is incomplete. ax2 = 0 has a single root x = 0`);
} else {
  alert(`The first value is 0, so the equation becomes linear`);
}*/
