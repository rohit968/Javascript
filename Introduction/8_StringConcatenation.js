// Concatenation means adding two or more strings

let string1 = 'Rohit'
let string2 = "Tiwari"

let fullString = string1 + " " + string2

console.log(fullString); // output: Rohit Tiwari

//For numbers using shortcut
let numString1 = '10'
let numString2 = '20'

let fullNumString = numString1 + numString2
console.log(fullNumString); // output: 1020. as these both are string till now
console.log(typeof fullNumString); // output: string

fullNumString = +numString1 + +numString2
console.log(fullNumString) // output: 30. as the + sign converts the string into number
console.log(typeof fullNumString) // output: number