//Maps
// map is an iterable
// store data in ordered fashion

//store key value pair(like object)
// duplicate keys are not allowed like objects

//Diff. b/w maps and objects
// Objects can only have string or symbol as key
// Maps can use anything as key like array, number, string


//Create a new Map
const person = new Map();

//adding key value pair in map
person.set('name', 'Rohit');
person.set('age', 28);
person.set(1, 'one'); // Here 1 is number type
person.set([1, 2, 3], 'numbers')
person.set({ 1: 'one' }, 'objectLiteral')
console.log(person);

//accessing the value
console.log(person.get(1));

//getting all the keys
console.log(person.keys()); // Gives all the keys
console.log(person.values()); // Gives all the values

// As it is iterable, we can use for of loop
for (let key of person.keys()) {
  console.log(person.get(key));
}

//Accessing maps using for of loop and array destructuring
for (let [key, value] of person) { //We can use array destructuring as it returns key value pair in array.
  console.log(key, value);
}


// Creating a new map
const user = new Map([['id', '1'], ['name', 'Rohit'], ['age', 28]]);
console.log(user);