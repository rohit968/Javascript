let firstName = "Rohit"

//  R  o  h  i  t
//  0  1  2  3  4 -> These are the indexes or positions of the indivual character

// Now the individua character can be accessed with their index or position number.

console.log(firstName[1]) // -> output : o
console.log(firstName[2]) // -> output : h

// length of the string

console.log(firstName.length) // -> output: 5

//if there are spaces in the string then spaces will be counted
let lastName = "Tiwari    "
console.log(lastName.length); // -> output: 10
console.log(lastName[9]); // -> output: This will give empty character

// last index or accessing the last character

console.log(firstName[firstName.length - 1])

console.log(firstName[firstName.length]) // output: This will give undefined
