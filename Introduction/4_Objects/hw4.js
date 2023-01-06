const age = +prompt("Enter a number");

const user = {
  name: "John",
  age,
};

const admin = { ...user, role: "admin" };

const { name, age: years, role } = admin;

console.log(user);
console.log(admin);
console.log(name, years, role);
