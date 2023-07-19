let fruits = ['apple', 'banana', 'mango', 'dragonfruit'];
console.log(fruits);

let result = ''
//Add element to the last of the array.
result = fruits.push('Watermelon'); //Also returns the length of the updated array
console.log(fruits);
console.log(result);

//Remove last element
result = fruits.pop() //Also returns the popped element
console.log(fruits);
console.log(result);

//Popped the first element of the array
result = fruits.shift();
console.log(fruits);
console.log(result); // Also returns the popped element

//Add to the front of the array
result = fruits.unshift('Juice');
console.log(fruits);
console.log(result); // Returns the length of array