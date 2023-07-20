const name = function (name) {
  return name
}
console.log(name("Rohit"));
//This is called function expression
//This can be converted into arrow function

const n = (name) => {// This is called arrow function
  return name;
}
console.log(n("Tiwari"));

//If there is a single parameter, then we can remove the brackets from parameters.
const num = n => {
  console.log(n);
}
num(2)

//If there is a single return statement, then we can remove the curly brackets and return keyword also from return statements.
const number = n => n;
console.log(number(3));