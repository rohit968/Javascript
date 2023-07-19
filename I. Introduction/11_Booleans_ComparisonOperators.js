//Booleans
// can be either true or false

let a = 7;
let b = 8;

console.log(a > b); // output: false
console.log(a < b); // output: true

// == and ===

let num1 = "7";
let num2 = 7;

console.log(num1 == num2) // output: true. As it compares the value only and not the types of the variable.
console.log(num1 === num2) // output: false. As it compares the value as well as the type of the variable.

//Same goes with !=(checks only value not datatype) and !==(checks both datatype and value).
console.log(num1 != num2) // output: false
console.log(num1 !== num2) // output: true


//truthy and falsy values

//Falsy values
    //false
    //0
    //"" -> empty string
    //null
    //undefined

//Truthy values
//values other than falsy values are truthy values