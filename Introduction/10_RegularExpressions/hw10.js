const userText = prompt('Enter any text string');

const regexpDate = /\d{1,2}\.\d{1,2}\.\d{1,4}/;
const regexpEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

if (regexpDate.test(userText)) {
  alert('You have entered some date');
} else if (regexpEmail.test(userText)) {
  alert('You have entered some email address');
} else {
  alert('You have entered some text');
}
