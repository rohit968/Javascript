// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName = "   Rohit   "
console.log(firstName.length); // counts the spaces as well

//trim removes all the extra spaces from a string
//it does not mutates the existing string as strings are immutable 
//it returns a new string

let firstNameWithoutSpaces = firstName.trim();
console.log(firstNameWithoutSpaces.length)


//toUpperCase() makes the string uppercase
//it does not mutates the existing string as strings are immutable 
//it returns a new string

let firstNameUpperCase = firstName.toUpperCase();
console.log(firstNameUpperCase);

//toLowerCase() makes the string lowercase
//it does not mutates the existing string as strings are immutable 
//it returns a new string

let lastname = "TIWARI"
let lastNameLowerCase = lastname.toLowerCase()
console.log(lastNameLowerCase);

//slice used to return the string according to the parameters given
//Takes two parameters or index. returns string from 1st parameter upto 2nd parametere not including the 2nd one.
//it does not mutates the existing string as strings are immutable 
//it returns a new string
console.log(lastname.slice(0,)) //output: TIWARI. Here slice works from start of the string (0) to end of the string()
console.log(lastname.slice(1, 4)) //output: IWA . It is running from index 1 to index 4 not including index 4.



