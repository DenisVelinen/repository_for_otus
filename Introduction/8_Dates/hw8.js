const now = new Date();
const hoursCurrent = now.getHours();
const minCurrent = now.getMinutes();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const inputDate = prompt("Enter any date in the format DD.MM.YYYY");

function getNormalizeDate(anyDate) {
  const [day, month, year] = anyDate.split(".");
  return (normalizeDate = new Date(`${year}-${month}-${day}`));
}

const inputBirthday = getNormalizeDate(inputDate);

alert(`The day you were born is ${days[inputBirthday.getDay()]}`);

console.log(
  `${
    hoursCurrent * 60 + minCurrent
  } the number of minutes elapsed since the beginning of today`
);

const userOne = "10.06.2018";
const userTwo = "10.08.2015";
const userOneBirthdate = getNormalizeDate(userOne);
const userTwoBirthdate = getNormalizeDate(userTwo);

if (userOneBirthdate.getTime() > userTwoBirthdate.getTime()) {
  console.log(`User ${userOne} is younger than user ${userTwo}`);
} else {
  console.log(`User ${userTwo} is younger than user ${userOne}`);
}
