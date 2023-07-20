//Map function will always returns a new array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubleNumber = numbers.map((number, index) => number * number)
console.log(doubleNumber);

//Similarly, index will be optional

//Diff. b/w forEach and map -> map returns a new array of the calculated result whereas forEach do not return anything.


const newNumber = numbers.forEach((number) => {
  return number * number;
})
console.log(newNumber); //Does not return anything