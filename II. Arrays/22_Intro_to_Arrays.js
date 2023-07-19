//Array -> ordered collection of items
//Reference type
//Arrays are mutable.

let fruits = ['apple', 'banana', 'mango', 'dragonfruit'];
//Index number-> 0         1         2         3

console.log(fruits[1]);

let number = [1, 2, 3, 5]
console.log(number[1]);

//Can store anything in the array
let mixed = ['Rohit', 28, 90.5, null, undefined]
console.log(mixed);

//Changing the array
fruits[1] = 'Kiwi' // This will change the value of fruits at index 1. Changing this will change the original array
console.log(fruits);

//typeof
console.log(typeof fruits); // output: objects. 

//check if array
console.log(Array.isArray(fruits));