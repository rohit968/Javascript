// Sets -> are iterable
//stores data
// have its own methods
// No-index based access
// Order is not guaranteed
// unique items only (no duplicated allowed)


//Diff. b/w arrays and sets
//  no-index based access
//  unique items only

const numbers = new Set([1, 2, 3]);
console.log(numbers);

console.log(numbers[2]) //output: undefined. As index-based access is not allowed


//Add elements in set
numbers.add(1);
numbers.add(2);
const items = ['item1', 'item2', 'item3'];
numbers.add(items);
console.log(numbers);

numbers.add(['item10', 'item20']);
numbers.add(['item10', 'item20']);
//Now this will be possible as both the arrays are pointing towards different address in heap memory.
console.log(numbers);


//Check if an element is present in set or not
const result = numbers.has(1); //This will return true if the element is in set, otherwise false.

for (let number of numbers) {
  console.log(number);
}

//sets and arrays
const nums = [1, 2, 4, 5, 2, 3, 1, 4, 5, 1, 7, 8];
const withoutDuplicate = new Set(nums);
console.log(withoutDuplicate);
console.log(withoutDuplicate.length); //output: undefined. As it is not array like objects. Can use for loop to calculate length.
