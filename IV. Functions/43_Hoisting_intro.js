//Hoisting intro
//Hoisting in function means that we can use a function even before the function is declared.
//This only works with function declaration and not with function expression or arrow function.

hello(); // This also works. THis is called hoisting in javascript.
function hello() {
  console.log("Hello World");
}
hello(); // This is a function call after the function is declared.


//Hoisting with function expression
name(); //Error: Cannot access 'name' before initialization
const name = function () {
  console.log('ROhit');
}


//Hoisting with arrow function
name1(); //Error: Cannot access 'name' before initialization
const name1 = () => console.log("Rohit");