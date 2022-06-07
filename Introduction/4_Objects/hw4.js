const age = +prompt('Enter a number');

let user = {
  name: 'John',
  age
};

let admin = Object.assign({}, user, {role: 'admin'});

let {name, age:years, role} = admin;

console.log(user);
console.log(admin);
console.log(name, years, role);
