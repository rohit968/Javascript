//Block vs function scope

//let and const are block scope
//var is function scope

//We can amke block in javascript using {}

{
  let firstName = "Rohit"
}

console.log(firstName); // Error: firstName is not defined. As firstName is defined using let inside a block.
// This can only be used inside that particular block

{
  let firstName = "Rohit Kumar"
}
//These are two other blocks and variables with same names and different values can be declared seperately.


{
  var firstName = "Rohit Tiwari"
}
console.log(firstName);
// variables defined using var can be accessed anywhere in the program. As it assumes the complete page as a function.
//That's why known as Functional Scope