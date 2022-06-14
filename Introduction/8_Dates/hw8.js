const now = new Date();
const hoursCurrent = now.getHours();
const minCurrent = now.getMinutes();

const userDate = prompt(`Enter any date in the format DD.MM.YYYY`)
const [day, month, year] = userDate.split('.');
const userDateNormalize = new Date(`${year}-${month}-${day}`);

console.log(`${day}, ${month}, ${year}`);
console.log(userDateNormalize);
console.log(userDateNormalize.getDay());
console.log(`${hoursCurrent * 60 + minCurrent} the number of minutes elapsed since the beginning of today`);

const userOneBirthdate = 11102001;
const userTwoBirthdate = 21052000;