//Cloning a array

//this can be done using slice method
let arr1 = ['item1', 'item2'];
let arr2 = arr1.slice(0); //This will copy the array from one array to another. This will create diff arrays in heap memory. Slice will provide with new array
console.log(arr1 === arr2); //output: false. This shows that both arrays are different.

//this can also be done with concat method
let arr3 = [].concat(arr1); //This will also create new array and will point to different heap position.
console.log(arr3 === arr1);


//Spread operator
let arr4 = [...arr1]; //This will also create new array and will point to different heap position.
console.log(arr4 === arr1);

//Spread operator is the most used method used for cloning an array.



//Adding new element while cloning the array

let fruits = ['banana', 'apple'];
//let newFruits = fruits.slice(0).concat(['kiwi', 'watermelon'])
//let newFruits = [].concat(fruits, ['kiwi', 'watermelon']);
let newFruits = [...fruits, 'kiwi', 'watermelon']; // Most used in javascript

console.log(newFruits);