//DATA TYPES(primitive)
//string "ROhit"
//number 2,4,5.6
//booleans
//undefined
//null
//BigInt
//Symbol


//typeof return the datatype of the asked variable
let age = 28;
let name = "Rohit Tiwari"

console.log(typeof age);
console.log(typeof name);


console.log(typeof null);  // output: null. This means that there is no value in the variable.
console.log(typeof undefined); //output: undefined. This means that there is a value in the variable but the value is missing.


//Convert Number to String
let num = 1234
let numString = String(num) // Converts number into string. Do not mutate the original value
console.log(typeof numString) // output: String
console.log(typeof num) // output: Number

//Shortcut
numString = num + '' //This also converts number to String


//Convert String to Number
let a = "1243"
let numb = Number(a); // Converts string to number. Do not mutate the orginal value
console.log(typeof a); // output: String
console.log(typeof numb); // output: Number

//Shortcut
let Stringnum = +a; // Add a + sign infront of the variable or value
console.log(typeof Stringnum)

