// These all the methods are used with Arrays
// Foreach, map, filter do not mutate the original array
//Sort, fill, splice mutate the original arry

//For each

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers.forEach((number, index) => { // We have to use Arrow function for the forEach loop
  console.log(`${number} is at index ${index}`);
})


console.log('Not using Arrow function');
numbers.forEach(function (number, index) { // We have to use Arrow function for the forEach loop
  console.log(`${number} is at index ${index}`);
})

//index as a parameter will be optional